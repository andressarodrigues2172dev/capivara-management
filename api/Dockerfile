# Use uma imagem oficial do Node.js
FROM node:22

# Crie o diretório de trabalho
WORKDIR /app

# Copie o package.json e o package-lock.json para a fase de construção
COPY package*.json ./

# Instale as dependências
RUN npm install --omit=dev

# Copie o restante da aplicação
COPY . .

# Exponha a porta da aplicação
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]