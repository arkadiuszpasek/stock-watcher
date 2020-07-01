FROM node:latest

WORKDIR /stock_watcher

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]