# Aula 15: Introdução a Objetos

**O que vais aprender nesta aula:**
- Objetos Literais `{}`.
- Chave e Valor.
- Aceder com Ponto `.`

---

### 🧠 Teoria (com Analogia e Contexto Real)
Arrays são listas. Objetos são descrições.

- **Analogia do quotidiano**: O Cartão de Cidadão.
    - Tem **Nome**, **NIF**, **Data**.
    - Cada campo tem um nome próprio (chave) e um conteúdo (valor).

**Sintaxe:**
```js
let pessoa = {
    nome: "João",
    idade: 25,
    cidade: "Lisboa"
};
```

---

### 💻 Prática (Orientada e Progressiva)

#### Exemplo 1: Ler
```js
console.log(pessoa.nome); // "João"
console.log(pessoa["idade"]); // 25 (Pode-se usar assim também)
```

#### Exemplo 2: Alterar e Criar
```js
pessoa.idade = 26; // Fez anos!
pessoa.profissao = "Dev"; // Nova propriedade
```

---

### ✅ Verificação de Conhecimento
**Testa o que aprendeste.**

1. Qual o parêntesis dos objetos? (`{}`).
2. Como se chama o nome da "gaveta" (ex: "nome")? (Chave ou Key).
3. Posso pôr um array dentro de um objeto? (Sim).

> 🔘 [Versão Interativa desta Aula](index.html)

---

### 🧩 Desafio Prático
**O Teu Telemóvel**
Cria um objeto `telemovel` com `marca`, `modelo` e `ano`.
Depois, muda o `ano` para 2026 e mostra a marca na consola.

```js
// Teu código
```

<details>
<summary><b>Mostrar Solução</b></summary>

```js
let telemovel = {
    marca: "Samsung",
    modelo: "Galaxy S50",
    ano: 2025
};

telemovel.ano = 2026;
console.log(telemovel.marca);
```
</details>
