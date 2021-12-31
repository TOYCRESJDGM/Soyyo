const request = require("supertest");
const app = require("../src/server");

describe("POST /entities/filter", () => {
    it("200 Response with List of entities", done => {
        request(app)
            .post("/entities/filter")
            .send({ startId: 1, endId: 3 }) //startId = 1 & endId = 3
            .set("Accept", "application/json")
            .expect("content-Type", "application/json; charset=utf-8")
            .expect(200)
            .end(error => {
                if (error) return done(error);
                done();
            })
    })

    it("404 Not found for specified range", done => {
        request(app)
            .post("/entities/filter")
            .send({ startId: 2, endId: 1 }) // startId > endId
            .set("Accept", "application/json")
            .expect("content-Type", "application/json; charset=utf-8")
            .expect(404)
            .end(error => {
                if (error) return done(error);
                done();
            })
    })

    it("404 Do not give rank values ", done => {
        request(app)
            .post("/entities/filter")
            .send({}) // not startdId & not endId
            .set("Accept", "application/json")
            .expect("content-Type", "application/json; charset=utf-8")
            .expect(404)
            .end(error => {
                if (error) return done(error);
                done();
            })
    })
})