### SOURCE: ###
### https://wkrzywiec.medium.com/build-and-run-angular-application-in-a-docker-container-b65dbbc50be8 ###


### STAGE 1: Build ###
FROM node:lts-alpine3.17 AS base_image

WORKDIR /app
COPY . .

### INSTALL DEPENDENCIES
RUN npm install 
### COMPILE ALL LOCALIZATIONS

RUN npm run build
RUN npm run build --configuration=es

### STAGE 2: Setup http server ###
FROM nginx:stable-alpine

COPY --from=base_image /app/dist/hiberus-frontend-test/en /usr/share/nginx/html/en
COPY --from=base_image /app/dist/hiberus-frontend-test/es /usr/share/nginx/html/es

COPY ./src/app/shared/mocks/ /usr/share/jsonserver/db/

COPY nginx.conf /etc/nginx/	

EXPOSE 80

###JSON-SERVER
WORKDIR /app

RUN apk add --update npm
RUN npm install -g json-server
EXPOSE 3000


### Services execution
COPY ./entrypoint.sh ./
RUN chmod +x ./entrypoint.sh
ENTRYPOINT ["./entrypoint.sh","-D","FOREGROUND"]