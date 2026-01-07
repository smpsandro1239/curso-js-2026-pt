# Aula 12: Arrow Functions

**O que vais aprender nesta aula:**
- A sintaxe moderna `() => {}`.
- Retorno implícito.
- Código mais limpo.

---

### 🧠 Teoria (com Analogia e Contexto Real)
O JavaScript evoluiu para escrevermos menos e fazermos mais.

- **Analogia do quotidiano**: SMS vs Carta.
    - **Function**: Formal, longa, cheia de cerimónias.
    - **Arrow Function**: "Curta e grossa". Vai direto ao ponto.

**Sintaxe:**
```js
// Antes
const somar = function(a, b) { return a + b; }

// Depois (Arrow)
const somar = (a, b) => a + b;
```

---

### 💻 Prática (Orientada e Progressiva)

#### Exemplo 1: Conversão
```js
// Função normal
function quadrado(n) {
    return n * n;
}

// Arrow Function
const quadrado = n => n * n;
```

#### Exemplo 2: Várias linhas
Se tiveres mais que uma linha, precisas das chaves `{}` e do `return` de volta.
```js
const saudarCompleto = nome => {
    let hora = 10;
    if (hora < 12) {
        return "Bom dia " + nome;
    }
    return "Olá " + nome;
}
```

---

### ✅ Verificação de Conhecimento
**Testa o que aprendeste.**

1. Como se escreve a "flecha"? (`=>`).
2. Se tirar as `{}`, o que acontece? (O retorno torna-se automático).
3. Posso usar Arrow Functions em todo o lado? (Quase tudo. Existem exceções avançadas com `this`).

> 🔘 [Versão Interativa desta Aula](index.html)

---

### 🧩 Desafio Prático
**Transformação**
Transforma esta função numa Arrow Function de uma linha:
`function par(n) { return n % 2 === 0; }`

```js
// Tua versão
```

<details>
<summary><b>Mostrar Solução</b></summary>

```js
const par = n => n % 2 === 0;

console.log(par(4)); // true
console.log(par(5)); // false
```
</details>
