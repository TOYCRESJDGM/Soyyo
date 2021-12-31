const axios = require("axios");

const getEntity = async (id) => {
    let entity;
    await axios({
        method: "get",
        url: `${process.env.AWS_URL}/${process.env.ENVIRONMENT}/entity/v2.1/entities/${id}`,
    }).then((response) => {
        entity = response.data;
    });
    return entity.data;
};

const mapEntity = (entity) => {
    return {
        entityId: entity.entityId,
        name: entity.name,
        identificationNumber: entity.identificationNumber,
        expirationDate: entity.expirationDate,
        contactName: entity.contactName,
        contactEmail: entity.contactMail,
        logo: entity.logo,
    };
};

exports.filter = async (req, res, next) => {
    const { startId, endId } = req.body;
    try {
        if (
            startId < 1 ||
            startId > 20 ||
            endId < 1 ||
            startId > 20 ||
            startId > endId ||
            !startId ||
            !endId
        ) {
            res.status(404).send({
                error: "Error no se encuentra para rango especificado",
            });
        } else {
            const entities = [];
            let fail = false;
            for (let i = startId; i <= endId; i++) {
                entityResponse = await getEntity(i);
                if (
                    !entityResponse.name ||
                    !entityResponse.identificationNumber ||
                    !entityResponse.expirationDate ||
                    !entityResponse.contactName ||
                    !entityResponse.contactMail
                ) {
                    console.log("Entidad no valida con id %o", i);
                    fail = true;
                    break;
                }
                entities.push(mapEntity(entityResponse));
            }
            if (fail) {
                res.status(400).send({
                    error: "Error en validación datos de entrada",
                });
            } else {
                res.status(200).send({
                    entities,
                });
            }
        }
    } catch (error) {
        res.status(500).send({
            error: "¡Error en el servidor!",
        });
        next(error);
    }
};
