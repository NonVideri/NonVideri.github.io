FROM alpine:3.14
USER root
WORKDIR /home/app
ADD https://raw.githubusercontent.com/cloudstateu/containers-w3-homework/master/package.json .
RUN apk add --update curl gnupg
RUN curl -sL https://deb.nodesource.com/setup_17.x
RUN apk add nodejs
RUN apk add npm
RUN npm install
ADD https://raw.githubusercontent.com/cloudstateu/containers-w3-homework/master/index.js .
RUN node index.js