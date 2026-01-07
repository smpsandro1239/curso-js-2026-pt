# Aula 4: Comparadores e Booleanos

**O que vais aprender nesta aula:**
- O tipo de dado `Boolean` (Verdadeiro ou Falso).
- Comparar valores (`>`, `<`, `>=`).
- A diferença crucial entre `==` e `===`.

---

### 🧠 Teoria (com Analogia e Contexto Real)
O computador é binário: ou passa corrente (1) ou não passa (0). Em JavaScript, chamamos a isto de `Boolean`, que só pode ser `true` (verdadeiro) ou `false` (falso).

- **Analogia do quotidiano**: O Porteiro da Discoteca.
    - O porteiro faz comparações: "Tens mais de 18 anos?"
    - Ele não aceita "mais ou menos" como resposta. Ou é **Sim** ou é **Não**.

- **Comparadores Comuns**:
    - `>` (Maior que)
    - `<` (Menor que)
    - `>=` (Maior ou igual)
    - `===` (Estritamente igual)
    - `!==` (Estritamente diferente)

---

### 💻 Prática (Orientada e Progressiva)

#### Exemplo 1: Perguntas Simples
```js
console.log(10 > 5);   // true
console.log(10 < 5);   // false
```

#### Exemplo 2: O Igual e o Diferente
Nota importante: Um igual `=` serve para **criar** variáveis. Três iguais `===` servem para **comparar**.
```js
let cor = "azul";

console.log(cor === "azul");    // true (é igual?)
console.log(cor === "vermelho");// false
console.log(cor !== "verde");   // true (é diferente de verde?)
```

#### Exemplo 3: A Armadilha do `==`
Evita usar dois iguais `==`, pois ele confunde texto com números.
```js
// MÁ PRÁTICA
console.log(5 == "5"); // true (Isto é confuso!)

// BOA PRÁTICA
console.log(5 === "5"); // false (Correto, número não é texto)
```

---

### ✅ Verificação de Conhecimento
**Testa o que aprendeste.**

1. O que devolve `20 >= 20`?
2. Qual o operador para "Diferente"?
3. Porque `===` é melhor que `==`?

> 🔘 [Versão Interativa desta Aula](index.html)

---

### 🧩 Desafio Prático
**Validador de Password**

Define uma password correta (ex: "S3cret") numa variável.
Define a password que o utilizador digitou noutra variável.
Cria uma variável `acessoPermitido` que compare as duas.

```js
const passwordCorreta = "12345";
let passwordDigitada = "12345";

// Teu código aqui
```

<details>
<summary><b>Mostrar Solução</b></summary>

```js
let acessoPermitido = passwordDigitada === passwordCorreta;
console.log("Acesso autorizado? " + acessoPermitido);
```
</details>
