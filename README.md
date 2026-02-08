# 📦 Estoque Front-End

Interface web da aplicação de controle de estoque e produção.

------------------------------------------------------------------------

## 🚀 Tecnologias Utilizadas

-   React
-   TypeScript
-   Axios
-   Vite
-   CSS Responsivo (Flexbox / Grid)

------------------------------------------------------------------------

## 🧠 Funcionalidades

### 📦 Products

-   Criar produto
-   Editar produto
-   Excluir produto
-   Listar produtos
-   Associar matérias-primas

### 🏭 Raw Materials

-   Criar matéria-prima
-   Editar matéria-prima
-   Excluir matéria-prima
-   Controle de estoque

### ⚙ Production

-   Cálculo automático de produção
-   Prioridade por produtos de maior valor
-   Exibição em cards responsivos
-   Cálculo do valor total estimado

------------------------------------------------------------------------

## 🔌 Configuração da API

Arquivo responsável pela conexão com o back-end:

src/api/api.ts

Exemplo:

import axios from "axios";

const api = axios.create({ baseURL: "http://localhost:8080", });

export default api;

Altere o baseURL caso o back-end esteja rodando em outro ambiente.

------------------------------------------------------------------------

## ▶️ Como Rodar o Projeto

### 1️⃣ Instalar dependências

``npm install``

ou

``yarn install``

------------------------------------------------------------------------

### 2️⃣ Rodar em ambiente de desenvolvimento

``npm run dev``

Aplicação disponível em:

http://localhost:5173

------------------------------------------------------------------------

### 3️⃣ Gerar build de produção

``npm run build``

Arquivos finais gerados na pasta:

dist/

------------------------------------------------------------------------

## 📱 Responsividade

O sistema foi desenvolvido com layout responsivo, funcionando em:

-   Desktop
-   Tablet
-   Mobile

------------------------------------------------------------------------

## 📌 Requisitos

-   Node.js 18+
-   NPM ou Yarn
-   Back-end rodando corretamente

------------------------------------------------------------------------

## 🧩 Melhorias Futuras

-   Autenticação com JWT
-   Dashboard analítico
-   Paginação
-   Filtros avançados
-   Dark Mode
-   Deploy com Docker

------------------------------------------------------------------------

## 👨‍💻 Projeto

Sistema completo de controle de estoque e produção com separação clara
entre front-end e back-end via API REST.
