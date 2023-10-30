FROM node:20 AS builder

WORKDIR /apprender

COPY . .

RUN npm install

RUN npm run build

EXPOSE 80

CMD [ "yarn", "start:prod" ]
