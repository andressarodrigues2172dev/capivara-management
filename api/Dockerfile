# Use uma imagem oficial do Node.js
FROM node:22

# Crie o diretório de trabalho
WORKDIR /app

# Copie apenas os arquivos de dependência
COPY package*.json ./

# Instale as dependências, evitando devDependencies
RUN npm install --omit=dev 

# Copie o restante da aplicação
COPY . .

# Remova o diretório de cache do npm se existir
RUN rm -rf /app/node_modules/.cache

# Exponha a porta da aplicação
EXPOSE 3000

# Comando para rodar a aplicação
CMD ["npm", "start"]
