# Aula 14: Métodos de Arrays

**O que vais aprender nesta aula:**
- Adicionar: `push` vs `unshift`.
- Remover: `pop` vs `shift`.

---

### 🧠 Teoria (com Analogia e Contexto Real)
Arrays são dinâmicos. Crescem e encolhem.

- **Analogia do quotidiano**: Fila de Pessoas vs Pilha de Pratos.
    - `push` (Fim) e `pop` (Fim) -> Pilha de Pratos.
    - `unshift` (Início) e `shift` (Início) -> Fura-filas ou Atendimento.

---

### 💻 Prática (Orientada e Progressiva)

#### Exemplo: Manipulação
```js
let tarefas = ["Comer", "Dormir"];

// Adicionar
tarefas.push("Codar"); // ["Comer", "Dormir", "Codar"]

// Remover o último
let feito = tarefas.pop(); // Remove "Codar"
console.log(feito); // "Codar"
```

---

### ✅ Verificação de Conhecimento
**Testa o que aprendeste.**

1. O `push` adiciona onde? (No fim).
2. O `shift` remove de onde? (Do início).
3. Qual é mais lento? (Operações no início, `shift/unshift`).

> 🔘 [Versão Interativa desta Aula](index.html)

---

### 🧩 Desafio Prático
**Histórico de Navegação**
Cria um array `historico`.
1. Visitaste "Google" (push).
2. Visitaste "Facebook" (push).
3. Visitaste "YouTube" (push).
4. Clicaste em "Voltar" (pop - remove o último).
Mostra o historial atual.

```js
// Teu código
```

<details>
<summary><b>Mostrar Solução</b></summary>

```js
let historico = [];
historico.push("Google");
historico.push("Facebook");
historico.push("YouTube");

historico.pop(); // Remove YouTube

console.log(historico); // ["Google", "Facebook"]
```
</details>
