# Aula 5: Operadores Lógicos

**O que vais aprender nesta aula:**
- O operador **E** (`&&`)
- O operador **OU** (`||`)
- O operador **NÃO** (`!`)
- Combinar condições para lógica complexa.

---

### 🧠 Teoria (com Analogia e Contexto Real)
Na vida real, muitas vezes precisamos de verificar múltiplas coisas ao mesmo tempo.

- **Analogia do quotidiano**: O Aeroporto.
    - **E (&&)**: Precisas de Bilhete **E** Cartão de Cidadão. (Os dois obrigatórios).
    - **OU (||)**: Podes apresentar Cartão de Cidadão **OU** Passaporte. (Um deles chega).
    - **NÃO (!)**: Não podes levar metais. (Inverso).

---

### 💻 Prática (Orientada e Progressiva)

#### Exemplo 1: O Operador E (&&)
Todas as condições têm de ser verdadeiras.
```js
let tenhoCarta = true;
let tenhoCarro = true;

let possoConduzir = tenhoCarta && tenhoCarro;
console.log(possoConduzir); // true
```

#### Exemplo 2: O Operador OU (||)
Basta uma ser verdadeira.
```js
let estudeiManha = false;
let estudeiNoite = true;

let diaProdutivo = estudeiManha || estudeiNoite;
console.log(diaProdutivo); // true
```

#### Exemplo 3: O Operador NÃO (!)
Inverte o valor.
```js
let gostoDeFutebol = false;
console.log(!gostoDeFutebol); // true (Não gosto de futebol = É verdade que não gosto)
```

---

### ✅ Verificação de Conhecimento
**Testa o que aprendeste.**

1. `true && true` dá quanto?
2. `false || true` dá quanto?
3. `!true` dá quanto?

> 🔘 [Versão Interativa desta Aula](index.html)

---

### 🧩 Desafio Prático
**Bolsa de Estudo**
Um aluno ganha bolsa se tiver Média >= 16 **OU** se tiver Rendimento < 1000.
Cria variáveis e testa a lógica.

```js
let media = 15;
let rendimento = 900;

// Teu código aqui
```

<details>
<summary><b>Mostrar Solução</b></summary>

```js
let ganhaBolsa = media >= 16 || rendimento < 1000;
console.log("Ganha bolsa? " + ganhaBolsa);
```
</details>
