# Aula 6: Estruturas Condicionais Simples (If/Else)

**O que vais aprender nesta aula:**
- Como fazer o código tomar decisões com `if`.
- Como criar alternativas com `else`.
- Blocos de código `{ }`.

---

### 🧠 Teoria (com Analogia e Contexto Real)
O código deixa de ser uma linha reta e passa a ter caminhos.

- **Analogia do quotidiano**: A Bifurcação.
    - Chegas a um cruzamento. **SE** queres ir para o Porto, viras à direita. **SENÃO**, segues em frente.
    - Não podes percorrer os dois caminhos ao mesmo tempo.

---

### 💻 Prática (Orientada e Progressiva)

#### Exemplo 1: O `if` simples
Executa apenas se for verdade.
```js
let bateria = 15;

if (bateria < 20) {
    console.log("Atenção: Bateria fraca! 🔋");
}
```

#### Exemplo 2: O `if` e `else`
Executa um OU o outro.
```js
let hora = 14;

if (hora < 12) {
    console.log("Bom dia!");
} else {
    console.log("Boa tarde!");
}
```

---

### ✅ Verificação de Conhecimento
**Testa o que aprendeste.**

1. O que acontece se a condição do `if` for falsa?
2. O `else` é obrigatório?
3. Para que servem as `{ }`?

> 🔘 [Versão Interativa desta Aula](index.html)

---

### 🧩 Desafio Prático
**Par ou Ímpar**
Verifica se o número `7` é par ou ímpar usando `%`.

```js
let numero = 7;
// Teu código
```

<details>
<summary><b>Mostrar Solução</b></summary>

```js
if (numero % 2 === 0) {
    console.log("Par");
} else {
    console.log("Ímpar");
}
```
</details>
