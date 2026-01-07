# Aula 22: Promises (Promessas)

**O que vais aprender nesta aula:**
- `new Promise((resolve, reject) => ...)`
- `.then()`: Sucesso.
- `.catch()`: Erro.
- `.finally()`: Sempre.

---

### 🧠 Teoria (com Analogia e Contexto Real)
Uma Promise é um objeto que representa um valor que **pode estar disponível agora, no futuro, ou nunca**.

- **Estados de uma Promise**:
    1. **Pending**: Em progresso (ex: "A aguardar confirmação...").
    2. **Fulfilled/Resolved**: Sucesso (ex: "Pagamento aceite").
    3. **Rejected**: Falha (ex: "Cartão recusado").

**Sintaxe:**
```js
const promessa = new Promise((resolve, reject) => {
    // Fazer algo demorado...
    if (tudoOk) resolve("Yes!");
    else reject("Oh no!");
});

promessa
    .then(res => console.log(res))
    .catch(err => console.error(err));
```

---

### 💻 Prática (Orientada e Progressiva)

#### Exemplo: Função delay
Vamos criar uma função que espera X segundos e devolve uma promessa. (Uma versão melhorada do setTimeout).

```js
function esperar(segundos) {
    return new Promise((resolve) => {
        setTimeout(resolve, segundos * 1000);
    });
}

console.log("Início");
esperar(2).then(() => console.log("Passaram 2 segundos!"));
```

---

### ✅ Verificação de Conhecimento
**Testa o que aprendeste.**

1. O que acontece se eu não chamar nem `resolve` nem `reject`? (A promise fica "pendente" para sempre e o código no `.then` nunca corre).
2. Posso encadear vários `.then()`? (Sim! O retorno de um passa para o próximo. Isso chama-se "Promise Chaining").

> 🔘 [Versão Interativa desta Aula](index.html)

---

### 🧩 Desafio Prático
Cria uma Promise que simula um lançamento de moeda (`Math.random() > 0.5`).
Se sair "Cara" (resolvida), mostra 🤠.
Se sair "Coroa" (rejeitada), mostra 👑.
Consome a promise e mostra o resultado na consola.

```js
// Teu código
```
