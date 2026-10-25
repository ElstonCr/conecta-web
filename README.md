# Conecta Web

React frontend for [Conecta](https://github.com/ElstonCr/conecta), a Rails API backend.

## Stack

React, Vite, ESLint. Node 24 (see `.nvmrc`).

## Setup

```bash
nvm use          # picks the Node version from .nvmrc
npm install
npm run dev      # http://localhost:5173
```

## Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the dev server with live reload |
| `npm run build` | Build the production files into `dist/` |
| `npm run lint` | Check the code with ESLint |

## Backend

This app talks to the Conecta API (default `http://localhost:3000`). Start the API first with `bin/rails server` in the `conecta` repo.
