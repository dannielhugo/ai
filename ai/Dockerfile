FROM node:22-alpine AS build-stage

WORKDIR /app

COPY package*.json .

COPY yarn.lock .

RUN yarn

COPY . .


FROM node:22-alpine AS local-stage

WORKDIR /app

COPY --from=build-stage /app /app

EXPOSE 5173

CMD [ "yarn", "dev:host" ]