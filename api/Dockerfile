FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm ci  # Mude de npm install para npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "start"]