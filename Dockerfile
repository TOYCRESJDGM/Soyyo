FROM node:latest

RUN mkdir -p /Soyyo-test

WORKDIR /Soyyo-test

COPY package.json /Soyyo-test

RUN npm install 

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

