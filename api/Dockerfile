FROM node:22

WORKDIR /app

COPY package*.json ./

# Remove o cache para evitar conflitos
RUN npm ci --no-cache

COPY . .

EXPOSE 3000

CMD ["npm", "start"]