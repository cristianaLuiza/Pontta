# 🌸 Pontta desafio técnico 

<div align="center">

### ✨ Projeto de Gestão de Vendas ✨

Uma aplicação desenvolvida para praticar e demonstrar conhecimentos em desenvolvimento Full Stack, integrando Angular e Spring Boot.

🌷 **Frontend:** Angular | **Backend:** Java + Spring Boot | **Banco de Dados:** MySQL

</div>

---

## 💗 Sobre o projeto

O **Pontta** é um projeto de gestão de vendas desenvolvido com o objetivo de praticar a integração entre frontend e backend, trabalhando com operações de cadastro, edição, consulta e exclusão de dados.

Durante o desenvolvimento, fui responsável por toda a implementação do módulo de **clientes**, criando as funcionalidades necessárias para gerenciar suas informações.

## 🎀 Funcionalidades desenvolvidas

### 👩🏻‍💻 Gestão de clientes

- [x] Cadastrar novos clientes.
- [x] Listar clientes cadastrados.
- [x] Editar informações de clientes.
- [x] Salvar alterações.
- [x] Excluir clientes.
- [x] Integrar frontend com backend através de requisições HTTP.

## 🛠️ Tecnologias utilizadas

### Frontend
- Angular 21
- TypeScript
- HTML5
- CSS3
- RxJS

### Backend
- Java 17
- Spring Boot 4.1.2
- Spring Data JPA
- Hibernate
- Maven
- API REST

### Banco de dados e ferramentas
- MySQL 8.0
- Docker
- Docker Compose

## 🗂️ Estrutura do projeto

```text
ponta/
│
├── backend/
│   ├── src/
│   │   └── main/
│   │       └── java/
│   │           └── com/example/ponta/
│   │               ├── controller/
│   │               ├── service/
│   │               ├── repository/
│   │               └── model/
│   │
│   └── pom.xml
│
├── frontend/
│   ├── src/
│   ├── package.json
│   └── angular.json
│
├── docker-compose.yml
└── README.md
```


## 🚀 Como executar o projeto

### 1. Clonar o repositório

```bash
git clone URL_DO_SEU_REPOSITORIO
```

### 2. Iniciar o banco de dados

Com o Docker instalado, execute na pasta onde está o arquivo `docker-compose.yml`:

```bash
docker compose up -d
```

O MySQL será iniciado na porta `3307`.

### 3. Executar o Backend

Entre na pasta do backend e execute:

```bash
.\mvnw.cmd spring-boot:run
```

O Spring Boot será responsável por disponibilizar a API REST e realizar a comunicação com o banco de dados.

### 4. Executar o Frontend

Entre na pasta do frontend e execute:

```bash
npm install
```

Depois:

```bash
npm start
```

O Angular iniciará a aplicação frontend.

## 🗄️ Configuração do banco de dados

O projeto utiliza MySQL 8.0 com Docker Compose.

Configurações utilizadas:

| Configuração | Valor |
|---|---|
| Banco de dados | gestao_vendas |
| Porta | 3307 |
| Usuário | admin |
| Container | ponta-mysql |

O Spring Data JPA, juntamente com o Hibernate, é utilizado para realizar o mapeamento entre as entidades Java e as tabelas do banco de dados.

## 🌷 Aprendizados

Com este projeto, pude praticar:

- Desenvolvimento de APIs REST com Spring Boot.
- Criação de operações CRUD.
- Persistência de dados utilizando Spring Data JPA.
- Integração entre Angular e Java.
- Comunicação HTTP entre frontend e backend.
- Configuração de banco de dados MySQL.
- Utilização do Docker para inicialização do banco de dados.


---

<div align="center">

Feito com 💗 por **Cristiana**

✨ Sempre aprendendo e desenvolvendo, obrigada pela oportunidade ! ✨

</div>