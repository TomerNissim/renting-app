FROM node:16-alpine

WORKDIR /server

COPY ./package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm","run", "dev"]
