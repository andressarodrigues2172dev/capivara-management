![Pizza](https://github.com/user-attachments/assets/bd2aef72-88b0-4e01-a6f7-1fb771c48089)

https://github.com/user-attachments/assets/3d506912-bbee-499f-a2dd-0bf57470098c


![Galeria de 3 Imagens](https://github.com/user-attachments/assets/d1cc80d4-3f7c-4f19-8d15-6aaf92711803)

Capivara Management System é um software desenvolvido para ajudar na catalogação de capivaras em zoológicos, substituindo o registro manual e facilitando a organização de informações como idade, peso, estado de saúde, e foto via URL.

## 📋 Detalhes Técnicos

### Linguagens e Ferramentas Utilizadas:
Node.js: Plataforma para a construção da API.

. Express: Framework para facilitar a criação das rotas e regras de negócio.

. MySQL: Banco de dados relacional utilizado para armazenar os registros de capivaras.

. Docker: Para containerizar a aplicação e facilitar o ambiente de desenvolvimento e produção.

. Axios: Utilizado para fazer requisições HTTP dentro da API.

. Dotenv: Para gerenciar variáveis de ambiente de maneira segura.


## Estrutura do Banco de Dados:

Tabela: capivaras

id (INT, PK, Auto Increment)

nome (VARCHAR)

idade (INT)

peso (DECIMAL)

estado_de_saude (VARCHAR)

habitat (VARCHAR)

comportamento (VARCHAR)

dieta (VARCHAR)

genero (CHAR)

observacoes (TEXT)

foto_url (VARCHAR)

created_at (TIMESTAMP)


## Endpoints da API:

POST /capivaras: Cria uma nova capivara.

GET /capivaras: Lista todas as capivaras cadastradas

GET /capivaras/:id: Obtém os detalhes de uma capivara específica.

PUT /capivaras/:id: Atualiza as informações de uma capivara.

DELETE /capivaras/:id: Remove o registro de uma capivara.


## 🛠 Como Executar
Pré-requisitos:

Node.js (>= 12)

MySQL

Docker (para execução via contêiner)

## Passo a Passo:

 1.Clone o repositório: 

```bash
git clone https://github.com/seu-usuario/capivara-management-system.git
cd capivara-management-system
```

 2.Configure o banco de dados MySQL:

Crie o banco de dados
```bash
CREATE DATABASE capivara_db;
```
 3.Configure suas variáveis de ambiente no arquivo .env:

```bash
DB_HOST=localhost
DB_USER=root
DB_PASS=sua-senha
DB_NAME=capivara_db

```
 4.Instale as dependências:

```bash
npm install

```

 5.Para rodar com Docker:

Certifique-se de que o Docker está instalado e funcionando.

 6.Suba o ambiente com Docker Compose
```bash
docker-compose up --build
```

 7.Acesse a aplicação em http://localhost:5173.

## 🧑‍💻 Como Contribuir

1.Faça um fork do projeto.

2.Crie uma nova branch para sua feature
```bash
git checkout -b minha-feature
```
3.Faça as alterações desejadas e commite
```bash
git commit -m "Adiciona nova feature"
```
4.Envie as alterações para o seu repositório fork:
```bash
git push origin minha-feature
```
5.Abra um Pull Request no repositório original.

## 🚀 Sobre o Projeto

Este projeto nasceu da necessidade de um biólogo especializado em grandes roedores de catalogar as capivaras em um zoológico de forma mais eficiente. Através do Capivara Management System, o registro de informações importantes como idade, peso, estado de saúde, comportamento, e fotos das capivaras agora é feito de forma digital e otimizada, permitindo que o biólogo acesse e gerencie esses dados com facilidade.

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
