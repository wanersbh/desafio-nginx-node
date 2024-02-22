FROM node:15

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

EXPOSE 8080

CMD npm install && node index.js