# Aula 9: O Loop For

**O que vais aprender nesta aula:**
- A estrutura compacta do `for`.
- Inicialização, Condição e Incremento.
- Criar loops de contagem fixa.

---

### 🧠 Teoria (com Analogia e Contexto Real)
O loop perfeito para quando sabes quantas vezes queres repetir algo.

- **Analogia do quotidiano**: A Corrida de Atletismo.
    - Começas na meta (Inicialização).
    - Corres enquanto não completares 4 voltas (Condição).
    - A cada volta, contas +1 no placar (Incremento).

**Estrutura:**
```js
for (inicialização; condição; incremento) {
    // código a repetir
}
```

---

### 💻 Prática (Orientada e Progressiva)

#### Exemplo 1: Contar até 5
```js
for (let i = 1; i <= 5; i++) {
    console.log("Número: " + i);
}
```

#### Exemplo 2: Tabuada do 7
```js
let numero = 7;
for (let i = 1; i <= 10; i++) {
    console.log(numero * i);
}
```

#### Exemplo 3: Contagem Inversa
```js
for (let i = 10; i >= 0; i--) {
    console.log(i);
}
console.log("Fim!");
```

---

### ✅ Verificação de Conhecimento
**Testa o que aprendeste.**

1. O que significa o `i` normalmente usado nos loops? (Índice/Iterador).
2. O que acontece se usares `;` a separar as partes do for? (É obrigatório!).
3. Posso somar de 2 em 2 (`i += 2`)? (Sim!).

> 🔘 [Versão Interativa desta Aula](index.html)

---

### 🧩 Desafio Prático
**Soma Acumulada**
Calcula a soma de todos os números de 1 a 10 (1+2+3...+10).

```js
let total = 0;
// Teu loop aqui
```

<details>
<summary><b>Mostrar Solução</b></summary>

```js
let total = 0;

for (let i = 1; i <= 10; i++) {
    total = total + i;
}

console.log("A soma total é: " + total); // 55
```
</details>
