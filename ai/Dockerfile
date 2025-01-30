FROM node:22-alpine AS build-stage

WORKDIR /app

COPY package*.json .

COPY yarn.lock .

RUN yarn

COPY . .


FROM node:22-alpine AS production-stage

WORKDIR /app

RUN npm install -g http-server

COPY --from=build-stage /app /app

RUN yarn build

EXPOSE 8080

CMD ["http-server", "/app", "-p", "8080", "-c-1", "--proxy", "http://127.0.0.1:8080?"]


FROM node:22-alpine AS local-stage

WORKDIR /app

COPY --from=build-stage /app /app

EXPOSE 5173

CMD [ "yarn", "dev:host" ]