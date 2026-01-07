# Aula 11: Retorno e Escopo

**O que vais aprender nesta aula:**
- O poder do `return`.
- Diferença entre Imprimir e Retornar.
- Escopo (Onde vivem as variáveis?).

---

### 🧠 Teoria (com Analogia e Contexto Real)
Uma função útil não se limita a mostrar coisas, ela **entrega** resultados.

- **Analogia do quotidiano**: O Multibanco.
    - **console.log**: É o talão (Informativo).
    - **return**: É o dinheiro (Útil para usar noutros lados).

---

### 💻 Prática (Orientada e Progressiva)

#### Exemplo 1: O Return
```js
function somar(a, b) {
    return a + b;
}

let minhasPoupancas = somar(50, 20); // Vale 70
let totalFinal = somar(minhasPoupancas, 10); // Vale 80
```

#### Exemplo 2: O Escopo (Scope)
Variáveis criadas dentro de uma função são invisíveis cá fora.
```js
function segredo() {
    let codigo = 1234;
    console.log(codigo); // Funciona
}

segredo();
// console.log(codigo); // ERRO! A variável "codigo" não existe aqui fora.
```

---

### ✅ Verificação de Conhecimento
**Testa o que aprendeste.**

1. O `return` para a execução da função? (Sim).
2. Posso usar uma variável local fora da função? (Não).
3. Para que serve o `return`? (Para devolver um valor para o resto do programa).

> 🔘 [Versão Interativa desta Aula](index.html)

---

### 🧩 Desafio Prático
**Metros para Centímetros**
Cria uma função que recebe metros e **retorna** centímetros. (x 100).
Guarda o resultado numa variável e mostra-o.

```js
// Tua função
// O teste
```

<details>
<summary><b>Mostrar Solução</b></summary>

```js
function converterMetros(metros) {
    return metros * 100;
}

let alturaCm = converterMetros(1.80);
console.log("Altura em cm: " + alturaCm);
```
</details>
