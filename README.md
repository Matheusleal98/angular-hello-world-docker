# Angular-Hello-World-Docker 🚀

Projeto Angular com Docker - Explorando conceitos de containerização

## 📋 Sobre o Projeto

Este é um projeto Angular que estou usando para explorar e aplicar conceitos Docker. Através dele, aprendo a criar containers, orquestrar serviços e compartilhar imagens no Docker Hub.

## 🛠️ Tecnologias Utilizadas
- **Angular** 20.3.8
- **Docker** & **Docker Compose**
- **Node.js** 24.11.0 (Alpine)
- **Spring Boot** (Backend service)

### Pré-requisitos

```bash
# Verificar instalações
docker --version
docker-compose --version
```

### Executar com Docker Compose
```bash
# Clonar o projeto
git clone https://github.com/Matheusleal98/angular-hello-world-docker.git
cd angular-hello-world-docker

# Executar todos os serviços
docker-compose up --build -d

# Ou em modo desenvolvimento (ver logs)
docker-compose up --build
```

### Acessar a Aplicação
- **Frontend (Angular)**: http://localhost:4200
- **Backend (Spring Boot)**: http://localhost:8080

## 🎯 Conceitos Docker Explorados

- ✅ **Criação de Dockerfiles** para aplicações Angular
- ✅ **Build de imagens personalizadas** com Node.js Alpine
- ✅ **Orquestração multi-serviço** com Docker Compose
- ✅ **Networking entre containers**
- ✅ **Otimização de cache** no build de imagens