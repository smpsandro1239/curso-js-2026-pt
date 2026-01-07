# Aula 23: Fetch API e JSON

**O que vais aprender nesta aula:**
- O que é uma API?
- `fetch()`: Fazer pedidos.
- `JSON`: O formato dos dados.
- Tratamento de erros HTTP.

---

### 🧠 Teoria (com Analogia e Contexto Real)
O Browser não tem todas as respostas. Ele pede-as a servidores (APIs).

- **Analogia**: Restaurante.
    - **Tu**: Cliente (Browser).
    - **Empregado**: Fetch API (Leva e traz o pedido).
    - **Cozinha**: Servidor / API.
    - **Prato**: Dados JSON.

**Sintaxe Básica:**
```js
fetch('https://api.site.com/dados')
  .then(response => response.json()) // Converter
  .then(data => console.log(data));  // Usar
```

---

### 💻 Prática (Orientada e Progressiva)

#### Exemplo: Facto Aleatório sobre Gatos
```js
fetch("https://catfact.ninja/fact")
    .then(res => res.json())
    .then(data => {
        console.log("Facto do gato:", data.fact);
    })
    .catch(err => console.log("O gato fugiu:", err));
```

---

### ✅ Verificação de Conhecimento
**Testa o que aprendeste.**

1. O `fetch` devolve uma Promise? (Sim).
2. O que faz o método `.json()`? (Lê o corpo da resposta e transforma texto JSON em Objeto JS).
3. Se o URL estiver errado, onde apanho o erro? (No bloco `.catch()`).

> 🔘 [Versão Interativa desta Aula](index.html)

---

### 🧩 Desafio Prático
Usa a API gratuita `https://dog.ceo/api/breeds/image/random`.
Faz um fetch.
Pega no URL da imagem que vem na resposta (`message`).
Cria uma tag `<img>` e mete-a na página com a foto do cão.

```js
// Teu código
```
