# Aula 2: Variáveis e Tipos de Dados

**O que vais aprender nesta aula:**
- O que são variáveis e para que servem.
- A diferença entre `let`, `const` e `var`.
- Os tipos de dados primitivos básicos.
- Boas práticas de nomeação em Português.

---

### 🧠 Teoria (com Analogia e Contexto Real)
Uma variável é apenas um nome que damos a um pedaço de memória do computador para guardar dados.

- **Analogia do quotidiano**: Imagina a tua cozinha. As variáveis são os **tupperwares**.
    - O conteúdo (arroz, feijão) é o **Valor**.
    - A etiqueta na tampa é o **Nome da Variável**.
    - Tu guardas coisas lá para usar mais tarde.

- **Porque é que isto importa?**
Se não usássemos variáveis, não conseguiríamos criar programas dinâmicos. Imagina um jogo onde a pontuação (score) não pudesse mudar. Não seria divertido, pois não?

> 💡 **Sabias que?** Em JavaScript moderno (ES6+), deixámos de usar `var`. Agora usamos `let` para coisas que mudam e `const` para coisas que são constantes.

---

### 💻 Prática (Orientada e Progressiva)

#### Exemplo 1: Usar `let` (Valores que mudam)
Use `let` para pontuações, contadores ou nomes que podem mudar.
```js
let pontuacao = 0;
console.log(pontuacao); // 0

pontuacao = 10; // Ganhaste 10 pontos!
console.log(pontuacao); // 10
```

#### Exemplo 2: Usar `const` (Valores fixos)
Use `const` para configurações, datas fixas ou valores matemáticos.
```js
const diasDaSemana = 7;
// diasDaSemana = 8; // Isto daria erro! Não podes mudar uma constante.
```

#### Exemplo 3: Tipos de Dados
O JavaScript sabe automaticamente o que está dentro da caixa.
```js
let nome = "Ana";      // String (texto)
let idade = 25;        // Number (número)
let estaChovendo = true; // Boolean (verdadeiro/falso)
```

> ⚠️ **Dica de Depuração**: Podes usar `typeof` para descobrir o tipo de uma variável.
> ```js
> console.log(typeof nome); // "string"
> ```

---

### ✅ Verificação de Conhecimento
**Testa o que aprendeste.**

1. Qual a palavra-chave para criar uma variável que não pode ser alterada?
2. O que acontece se tentares somar `"10"` (texto) com `5` (número)?
3. Porque é que `var` é considerado má prática hoje em dia?

> 🔘 [Versão Interativa desta Aula](index.html)

---

### 🧩 Desafio Prático
**Troca de Valores (Swap)**

Tenta trocar o valor de duas variáveis.
Tens `a = "Azul"` e `b = "Vermelho"`. Faz com que `a` fique `"Vermelho"` e `b` fique `"Azul"`.

- **Restrições**: Tens de usar uma terceira variável auxiliar.

```js
let a = "Azul";
let b = "Vermelho";

// O teu código aqui
```

<details>
<summary><b>Mostrar Solução</b></summary>

```js
let auxiliar = a; // Guardar "Azul" no auxiliar
a = b;            // a passa a ser "Vermelho"
b = auxiliar;     // b passa a ser o que estava no auxiliar ("Azul")
```

### 📌 Explicação da Solução
Se fizéssemos logo `a = b`, o valor "Azul" desapareceria para sempre! Por isso precisamos do `auxiliar` para segurar o valor temporariamente. É como ter um terceiro copo vazio para trocar o líquido de dois copos cheios.
</details>
