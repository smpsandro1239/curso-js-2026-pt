# Aula 8: Introdução aos Loops (While)

**O que vais aprender nesta aula:**
- O conceito de Repetição.
- A estrutura `while` (Enquanto...).
- O perigo do Loop Infinito.

---

### 🧠 Teoria (com Analogia e Contexto Real)
Para não escreveres código repetido, usas loops.

- **Analogia do quotidiano**: O Prato de Sopa.
    - **ENQUANTO** houver sopa no prato, come uma colher.
    - Repete, repete, repete... até o prato estar vazio.

---

### 💻 Prática (Orientada e Progressiva)

#### Exemplo 1: Contagem Simples
```js
let contador = 1;

while (contador <= 5) {
    console.log(contador);
    contador++; // Fundamental! Senão o contador é sempre 1.
}
```

#### Exemplo 2: Loop Infinito (NÃO CORRAS ISTO)
Só para entenderes o perigo. Se te esqueces de mudar a variável, o programa encrava.
```js
let x = 10;
while (x > 5) {
    console.log("Isto nunca vai parar...");
    // Faltou o x-- ou algo para mudar o valor de x
}
```

---

### ✅ Verificação de Conhecimento
**Testa o que aprendeste.**

1. O que é um Loop Infinito?
2. Onde devemos alterar a variável de controlo? (Dentro do bloco do loop).
3. Quando é que o `while` é útil? (Quando não sabemos o número exato de repetições).

> 🔘 [Versão Interativa desta Aula](index.html)

---

### 🧩 Desafio Prático
**Contagem Decrescente (Lançamento de Foguetão)**
Faz um loop que conte de 5 até 1 e no final diga "Descolagem!".

```js
let tMenos = 5;

// Teu código aqui
```

<details>
<summary><b>Mostrar Solução</b></summary>

```js
while (tMenos > 0) {
    console.log(tMenos);
    tMenos--;
}
console.log("Descolagem! 🚀");
```
</details>
