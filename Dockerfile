#Buscando a mesma imagem que tenho em minha máquina local
FROM node:24.11.0-alpine
#Criando e acessando a pasta APP do meu container
WORKDIR /app
#Copiando os arquivos que tenho no meu projeto p/ dentro da pasta APP
COPY package*.json ./
#Instalando as depedências do projeto
RUN npm install
#Copiando todos arquivos do projeto p/ meu container
COPY . .
#Explorando a porta 4200
EXPOSE 4200
#Comando para inicializar aplicação
CMD ["npm", "start"]
