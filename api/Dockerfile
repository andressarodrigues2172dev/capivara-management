FROM node:22

WORKDIR /app

COPY package*.json ./

# Limpe o cache do npm antes de executar npm ci para evitar conflitos
RUN npm cache clean --force && npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
