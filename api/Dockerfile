FROM node:22 

WORKDIR /app

COPY package*.json ./


RUN npm cache clean --force && npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
