FROM node:22

WORKDIR /app

COPY package*.json ./

# Remove o cache para evitar conflitos
RUN rm -rf /app/node_modules/.cache && npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "start"]