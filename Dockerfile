FROM node:16.17 AS development

#  Navigate to the container working directory 
WORKDIR /usr/src/app
#  Copy package.json
COPY package*.json ./

RUN npm install glob rimraf
RUN npm install
COPY . .
# RUN npm run start:dev