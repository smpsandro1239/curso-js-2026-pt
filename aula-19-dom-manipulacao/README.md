# Aula 19: Obter e Manipular Dados

**O que vais aprender nesta aula:**
- Ler Inputs: `.value`.
- Escrever na página: `.innerText` vs `.innerHTML`.
- Mudar CSS: `.style`.

---

### 🧠 Teoria (com Analogia e Contexto Real)
Uma página web é uma conversa de dois sentidos.

- **Input (.value)**: O que o utilizador diz.
- **Output (.innerText)**: O que a página responde.

**Sintaxe:**
```js
// LER
let nome = document.querySelector("#campoNome").value;

// ESCREVER
document.querySelector("#titulo").innerText = "Olá " + nome;

// PINTAR
document.querySelector("#titulo").style.color = "red";
```

---

### 💻 Prática (Orientada e Progressiva)

#### Exemplo: Calculadora Simples
```html
<input type="number" id="n1">
```
```js
let valor = document.querySelector("#n1").value;
console.log(valor); // Nota: Isto vem sempre como Texto (String)!
// Para contas, usa Number(valor)
```

---

### ✅ Verificação de Conhecimento
**Testa o que aprendeste.**

1. Para ler um input uso? (`value`).
2. Para ler um parágrafo uso? (`innerText` ou `textContent`).
3. O `.style` serve para quê? (Alterar CSS diretamente no elemento).

> 🔘 [Versão Interativa desta Aula](index.html)

---

### 🧩 Desafio Prático
Cria um input de cor (`<input type="color" id="cor">`).
Cria um botão.
Ao clicar no botão, muda a cor de fundo do `body` para a cor escolhida no input.

```js
// Teu código
```
