# Aula 18: Eventos (Clicks)

**O que vais aprender nesta aula:**
- `addEventListener`.
- Evento `click`.
- Função de Callback (Reação).

---

### 🧠 Teoria (com Analogia e Contexto Real)
O JavaScript precisa de "ouvidos" para saber quando agir.

- **Analogia do quotidiano**: A Campainha.
    - O botão existe sempre.
    - O som só toca SE alguém carregar.
    - Tu só abres a porta SE ouvires o som.

**Sintaxe:**
```js
elemento.addEventListener("tipo_de_evento", funcao_acao);
```

---

### 💻 Prática (Orientada e Progressiva)

#### Exemplo: Botão de Alerta
```html
<button id="btn">Clica-me</button>
```
```js
const botao = document.querySelector("#btn");

botao.addEventListener("click", () => {
    console.log("Fui clicado!");
    alert("Olá!");
});
```

---

### ✅ Verificação de Conhecimento
**Testa o que aprendeste.**

1. Qual o método que "ouve" eventos? (`addEventListener`).
2. O que é o segundo argumento desse método? (A função que vai ser executada).
3. Posso ouvir outros eventos além do "click"? (Sim: "mouseover", "keydown", etc).

> 🔘 [Versão Interativa desta Aula](index.html)

---

### 🧩 Desafio Prático
Cria um botão com texto "ON".
Ao clicar, muda o texto do botão para "OFF" (usa `innerText`) e a cor de fundo para vermelho (usa `style.backgroundColor`).

```js
// Teu código
```
