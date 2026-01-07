# Aula 13: Introdução a Arrays (Listas)

**O que vais aprender nesta aula:**
- O que é um Array.
- Criação `[]`.
- Índices (0, 1, 2...).
- Tamanho `length`.

---

### 🧠 Teoria (com Analogia e Contexto Real)
Para guardar múltiplos valores numa só variável.

- **Analogia do quotidiano**: Caixa de Medicamentos.
    - **Variável**: A Caixa inteira.
    - **Índice**: O dia da semana (Segunda, Terça...).
    - **Valor**: O comprimido que lá está dentro.

**Sintaxe:**
```js
let lista = ["Item 1", "Item 2", "Item 3"];
```

---

### 💻 Prática (Orientada e Progressiva)

#### Exemplo 1: Ler Valores
```js
let herois = ["Batman", "Superman", "Mulher Maravilha"];

console.log(herois[0]); // Batman
console.log(herois[1]); // Superman
```

#### Exemplo 2: Modificar Valores
```js
let notas = [10, 20, 15];
notas[0] = 12; // Agora o primeiro valor é 12
console.log(notas); // [12, 20, 15]
```

#### Exemplo 3: Tamanho da Lista
```js
console.log(herois.length); // 3
```

---

### ✅ Verificação de Conhecimento
**Testa o que aprendeste.**

1. Onde começa a contagem dos índices? (Zero).
2. Como sei quantos itens tem a lista? (`.length`).
3. Posso ter uma lista vazia? (Sim, `[]`).

> 🔘 [Versão Interativa desta Aula](index.html)

---

### 🧩 Desafio Prático
**O Último Elemento**
Cria um array com 5 números à tua escolha.
Mostra na consola a soma do **primeiro** com o **último** número, sem escreveres os números diretamente (usa os índices).

```js
let numeros = [10, 5, 20, 10, 50];
// Teu código
```

<details>
<summary><b>Mostrar Solução</b></summary>

```js
let numeros = [10, 5, 20, 10, 50];
let primeiro = numeros[0];
// Truque para o último: tamanho - 1
let ultimo = numeros[numeros.length - 1];

console.log(primeiro + ultimo); // 10 + 50 = 60
```
</details>
