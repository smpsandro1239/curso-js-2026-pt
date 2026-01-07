# Aula 17: Introdução ao DOM

**O que vais aprender nesta aula:**
- O que é o DOM.
- A Árvore de Elementos.
- `getElementById` vs `querySelector`.

---

### 🧠 Teoria (com Analogia e Contexto Real)
O DOM é a ponte entre o JavaScript e o HTML.

- **Analogia do quotidiano**: O DOM é o "Painel de Controlo" da tua página.
    - Se o HTML é a casa construída...
    - O DOM é o comando da Smart Home que te deixa acender luzes e abrir janelas.

**Seletores:**
```js
// Pelo ID (Mais rápido e específico)
const titulo = document.getElementById("meuTitulo");

// Pelo Seletor CSS (Mais versátil)
const botao = document.querySelector(".classe-botao");
```

---

### 💻 Prática (Orientada e Progressiva)

#### Exemplo 1: Capturar
```html
<h1 id="titulo">Bem-vindo</h1>
```
```js
const elemento = document.getElementById("titulo");
console.log(elemento); // Mostra <h1...>
```

---

### ✅ Verificação de Conhecimento
**Testa o que aprendeste.**

1. O que significa o seletor `.nome` no querySelector? (Classe).
2. O que significa o seletor `#nome` no querySelector? (ID).
3. O `document` representa o quê? (A página inteira).

> 🔘 [Versão Interativa desta Aula](index.html)

---

### 🧩 Desafio Prático
Cria um ficheiro HTML com um `<p id="frase">Teste</p>`.
No JS, seleciona esse elemento e guarda numa variável.
Imprime a variável na consola.
