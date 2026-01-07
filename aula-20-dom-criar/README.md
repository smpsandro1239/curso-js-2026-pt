# Aula 20: Criar Elementos (Dinâmico)

**O que vais aprender nesta aula:**
- `document.createElement()`.
- `appendChild()`.
- Criar listas dinâmicas.

---

### 🧠 Teoria (com Analogia e Contexto Real)
Sites modernos não trazem o HTML todo feito. Eles constroem-no na hora.

- **Analogia do quotidiano**: Construção de LEGO.
    1. Pegas na peça (`createElement`).
    2. Personalizas a peça (Cor, Texto).
    3. Encaixas na base (`appendChild`).

**Sintaxe:**
```js
let novo = document.createElement("p");
novo.innerText = "Olá!";
document.body.appendChild(novo);
```

---

### 💻 Prática (Orientada e Progressiva)

#### Exemplo: Adicionar Item a uma Lista
```html
<ul id="lista"></ul>
```
```js
const ul = document.querySelector("#lista");
const li = document.createElement("li");

li.innerText = "Leite";
ul.appendChild(li); // AGORA aparece na lista
```

---

### ✅ Verificação de Conhecimento
**Testa o que aprendeste.**

1. O `createElement` coloca o elemento no HTML? (Não, só na memória).
2. Como insiro o elemento criado? (Com `appendChild`).
3. Posso dar classes ao elemento criado? (Sim, com `elemento.classList.add(...)`).

> 🔘 [Versão Interativa desta Aula](index.html)

---

### 🧩 Desafio Prático
Cria um botão.
Sempre que clicares nele, cria um quadrado `div` com 50px de largura e cor aleatória, e adiciona-o ao corpo da página.
(Dica: usa `Math.random()` para a cor ou uma lista de cores).

```js
// Teu código
```
