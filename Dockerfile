FROM node:current-alpine3.21 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM httpd:alpine3.21
COPY --from=build /app /usr/local/apache2/htdocs/