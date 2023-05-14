## Introducao
Projeto de API exemplo feito em Express (node.js) e MySQL (usando ORM Sequelize).
Testes com Jest e Supertest.

## Versao do node:
v18.11.0

## IDE
Instalar no VSCode:
- ESLint (Microsoft)
- REST Client (Huachao Mao)
- Todo Tree (Gruntfuggly)

## .env
O arquivo não fica no git, é preciso dele na raiz do projeto com as configurações da base de dados.

## Instalacao do projeto
npm install

## Rodar o projeto em mode de desenvolvimento
npm run dev

## Rodar os testes
npm run test

## Decisoes de projeto:
- nao usei ES Modules porque o Jest nao da um suporte bom para ele ainda, inclusive o node ainda nao tem um suporte legal.  Fiquei com CommonJS mesmo