# syntax=docker/dockerfile:1
FROM node:18.12.1-slim as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

CMD ["node", "server/server.js"]
EXPOSE 3000