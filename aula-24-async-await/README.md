# Aula 24: Async / Await (Sintaxe Moderna)

**O que vais aprender nesta aula:**
- `async function`.
- `await`.
- `try...catch`.
- Diferenças para `.then()`.

---

### 🧠 Teoria (com Analogia e Contexto Real)
O `async/await` é "açúcar sintático" (syntactic sugar) sobre as Promises. Fazem a mesma coisa, mas o código é mais bonito.

- **Analogia**: Ler um livro.
    - **.then()**: Lês uma página, e dizes "quando acabar, avisa-me para ler a próxima".
    - **await**: Lês a página e fazes uma pausa antes de virar para a próxima.

**Sintaxe:**
```js
async function obterDados() {
    try {
        let resposta = await fetch("...");
        let dados = await resposta.json();
        console.log(dados);
    } catch (erro) {
        console.error("Ops!", erro);
    }
}
```

---

### 💻 Prática (Orientada e Progressiva)

#### Exemplo: Esperar 2 segundos
```js
function delay(ms) {
    return new Promise(r => setTimeout(r, ms));
}

async function inicio() {
    console.log("Olá...");
    await delay(2000); // Pausa aqui 2s
    console.log("...Mundo!");
}
inicio();
```

---

### ✅ Verificação de Conhecimento
**Testa o que aprendeste.**

1. O `await` bloqueia o navegador todo? (Não, só a execução daquela função assíncrona).
2. O que retorna uma função `async`? (Sempre uma Promise).
3. Posso usar `await` sem `async`? (Não, dá erro de sintaxe, exceto em módulos ES modernos).

> 🔘 [Versão Interativa desta Aula](index.html)

---

### 🧩 Desafio Prático
Recria o desafio do fetch do "Cão" (Aula 23) mas usando `async/await`.
Envolve tudo num bloco `try...catch` para garantir que se a API falhar, o utilizador vê uma mensagem de erro agradável.

```js
// Teu código
```
