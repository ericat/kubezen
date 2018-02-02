FROM node:8.5.0-alpine

WORKDIR .

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]
