# Metacam Calculator

## Descrição

O **Metacam Calculator** é uma aplicação web desenvolvida em **Next.js** e **React** para comparar o custo de tratamento entre o Metacam e seus concorrentes. O sistema permite inserir diferentes produtos veterinários, comparar seus preços e determinar qual possui o menor custo por tratamento.

## Tecnologias Utilizadas

- **Next.js** (React)
- **TypeScript**
- **Tailwind CSS**
- **Hooks do React (useState)**

## Funcionalidades

- Inserir dados do Metacam e de concorrentes
- Cálculo automático do custo por dose e por tratamento
- Comparar e destacar qual produto possui o menor custo
- Interface responsiva e intuitiva

## Como Executar o Projeto

### 1. Clonar o Repositório
```bash
git clone https://github.com/seu-usuario/metacam-calculator.git
cd metacam-calculator
```

### 2. Instalar as Dependências
Se a pasta `node_modules` foi apagada ou se é a primeira vez rodando o projeto:
```bash
npm install
```

### 3. Executar o Servidor de Desenvolvimento
```bash
npm run dev
```
Acesse o projeto no navegador: **http://localhost:3000**

## Estrutura do Projeto

```
/metacam-calculator
│── /app
│   ├── /lib
│   │   ├── calculations.ts  # Funções de cálculo
│   │   ├── competitors.ts   # Lista de concorrentes
│   ├── /components
│   │   ├── Header.tsx       # Cabeçalho
│   │   ├── Container.tsx    # Container responsivo
│   ├── /styles
│   │   ├── globals.css      # Estilização global
│   ├── page.tsx             # Página principal
│── package.json             # Dependências e scripts
│── README.md                # Documentação
```

## Melhorias Futuras
- Salvar os dados localmente para reutilização
- Implementar suporte para mais concorrentes
- Criar uma versão mobile aprimorada

## Contato
Dúvidas ou sugestões? Entre em contato!

Desenvolvido por **Victor Ramos Andrade Callegari** 🚀

