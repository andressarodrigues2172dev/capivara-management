# Etapa de build
FROM node:20 as build-stage

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependência
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o código da aplicação
COPY . .

# Compila a aplicação para produção
RUN npm run build

# Etapa de produção com NGINX
FROM nginx:alpine as production-stage

# Copia os arquivos compilados da etapa anterior para o diretório público do NGINX
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expõe a porta padrão do NGINX
EXPOSE 80

# Comando padrão para rodar o NGINX
CMD ["nginx", "-g", "daemon off;"]