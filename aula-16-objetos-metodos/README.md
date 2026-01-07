# Aula 16: Objetos com Métodos e This

**O que vais aprender nesta aula:**
- Métodos (Funções em objetos).
- `this` (O contexto "Eu").
- Porquê evitar Arrow Functions aqui.

---

### 🧠 Teoria (com Analogia e Contexto Real)
Objetos não são só dados estáticos. Eles têm ações.

- **Analogia do quotidiano**: O Super-Herói.
    - **Propriedades**: Capa, Força (Substantivos).
    - **Métodos**: Voar(), Salvar() (Verbos).
    - **This**: "A **minha** capa". Referência a si próprio.

**Sintaxe:**
```js
let heroi = {
    nome: "Batman",
    atacar: function() {
        console.log("Soco!");
    }
};
heroi.atacar();
```

---

### 💻 Prática (Orientada e Progressiva)

#### Exemplo 1: Usar o `this`
```js
let user = {
    nome: "Ana",
    falar: function() {
        console.log("Sou a " + this.nome);
    }
};

user.falar(); // "Sou a Ana"
```

#### Exemplo 2: O Perigo da Arrow Function
```js
let user = {
    nome: "Ana",
    falar: () => {
        console.log(this.nome); // ERRO ou undefined!
    }
};
// Arrow function não tem o seu próprio "this".
```

---

### ✅ Verificação de Conhecimento
**Testa o que aprendeste.**

1. O que é um método? (Uma função dentro de um objeto).
2. O que faz o `this`? (Aponta para o dono do código).
3. Devo usar Arrow Functions em métodos? (Geralmente não, se precisares do `this`).

> 🔘 [Versão Interativa desta Aula](index.html)

---

### 🧩 Desafio Prático
**Calculadora Portátil**
Cria um objeto `calc` com:
- `valor: 0`
- `somar(n)` (aumenta o valor)
- `mostrar()` (imprime o valor)

```js
// Teu código
```

<details>
<summary><b>Mostrar Solução</b></summary>

```js
let calc = {
    valor: 0,
    somar: function(n) {
        this.valor += n;
    },
    mostrar: function() {
        console.log(this.valor);
    }
};

calc.somar(10);
calc.somar(5);
calc.mostrar(); // 15
```
</details>
