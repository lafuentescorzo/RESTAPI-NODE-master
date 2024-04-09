# Etapa de construcción
FROM node:21 AS build
WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

# Etapa de producción
FROM node:21 AS production
WORKDIR /app

COPY --from=build /app .

CMD [ "npm", "start" ]
