# Aula 10: Introdução às Funções

**O que vais aprender nesta aula:**
- O conceito de Função (Reutilização).
- Como declarar `function nome() {}`.
- Como chamar `nome()`.
- Parâmetros.

---

### 🧠 Teoria (com Analogia e Contexto Real)
Para não repetires código, crias "miniprogramas" dentro do teu programa.

- **Analogia do quotidiano**: A Receita.
    - **Declarar**: Escrever a receita no papel. (Não faz o bolo).
    - **Chamar**: Cozinhar seguindo a receita. (Faz o bolo).

---

### 💻 Prática (Orientada e Progressiva)

#### Exemplo 1: Função Básica
```js
function dizerOla() {
    console.log("Olá mundo! 🌍");
}

dizerOla(); // Executa 1 vez
dizerOla(); // Executa 2 vezes
```

#### Exemplo 2: Parâmetros (Ingredientes)
```js
function saudarAmigo(nome) {
    console.log("Olá " + nome + "!");
}

saudarAmigo("João");  // "Olá João!"
saudarAmigo("Maria"); // "Olá Maria!"
```

---

### ✅ Verificação de Conhecimento
**Testa o que aprendeste.**

1. O que acontece se chamares a função sem `()`? (Nada acontece).
2. Podes ter funções sem parâmetros? (Sim).
3. O que é reutilização de código? (Escrever uma vez, usar muitas).

> 🔘 [Versão Interativa desta Aula](index.html)

---

### 🧩 Desafio Prático
**Multiplicador**
Cria uma função `multiplicar` que recebe dois números e mostra o resultado da multiplicação.

```js
// Tua função aqui

// Chama-a com 2 e 5
```

<details>
<summary><b>Mostrar Solução</b></summary>

```js
function multiplicar(a, b) {
    console.log(a * b);
}

multiplicar(2, 5); // 10
```
</details>
