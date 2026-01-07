# Aula 25: Desestruturação e Spread (ES6+)

**O que vais aprender nesta aula:**
- Extrair dados de objetos e arrays (`Destructuring`).
- Espalhar dados com `Spread Operator (...)`.
- Agrupar argumentos com `Rest Operator (...)`.

---

### 🧠 Teoria Rápida

#### 1. Destructuring (Objetos)
Antigamente:
```js
const nome = user.nome;
const email = user.email;
```

Agora (ES6+):
```js
const { nome, email } = user;
```

#### 2. Spread (Arrays e Objetos)
Copiar ou fundir arrays:
```js
const numeros = [1, 2, 3];
const novos = [...numeros, 4, 5]; // [1, 2, 3, 4, 5]
```

---

### 💻 Exercícios Práticos

1. Cria um objeto `produto` com `nome` e `preco`.
2. Usa destructuring para criar as variáveis `nome` e `preco`.
3. Cria um novo array de `categorias`.
4. Cria um segundo array que contenha todas as categorias do primeiro + "Promoções", usando Spread.

---

### ✅ Verificação de Conhecimento
> 🔘 [Versão Interativa desta Aula](index.html)

---
