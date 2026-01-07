# Aula 3: Operadores Matemáticos e Aritmética

**O que vais aprender nesta aula:**
- Como fazer cálculos básicos (+, -, *, /).
- O conceito de Resto da Divisão (Módulo %).
- Incremento e Decremento (++ e --).
- A precedência das operações (PEMDAS).

---

### 🧠 Teoria (com Analogia e Contexto Real)
JavaScript funciona como uma super calculadora. Podemos usar operadores para manipular números.

- **Analogia do quotidiano**: A Pizzaria.
    - O operador **Soma (+)** é adicionar ingredientes.
    - O operador **Divisão (/)** é cortar as fatias.
    - O operador **Módulo (%)** são as fatias que sobram no final da festa.

- **Porque é que isto importa?**
É impossível programar sem matemática básica. Desde calcular os segundos restantes num vídeo, até posicionar elementos no ecrã ou calcular descontos numa loja.

---

### 💻 Prática (Orientada e Progressiva)

#### Exemplo 1: Operações Básicas
```js
console.log(10 + 20); // 30 (Soma)
console.log(50 - 10); // 40 (Subtração)
console.log(5 * 5);   // 25 (Multiplicação)
console.log(20 / 2);  // 10 (Divisão)
```

#### Exemplo 2: O Operador Módulo (%)
Devolve o **resto** da divisão. Útil para padrões cíclicos (ex: saber que dia da semana é daqui a 10 dias).
```js
console.log(10 % 3); // 1 (10 / 3 dá 3 e sobra 1)
```

#### Exemplo 3: Ordem das Operações
A multiplicação ganha à soma.
```js
let resultado = 5 + 2 * 10;
// Primeiro 2*10 = 20. Depois 5+20 = 25.
console.log(resultado); // 25
```

---

### ✅ Verificação de Conhecimento
**Testa o que aprendeste.**

1. Quanto é `7 % 2`? (Resto de 7 a dividir por 2)
2. Como incremento a variável `a` em 1 unidade?
3. Se quiser que a soma aconteça antes da multiplicação, o que devo usar?

> 🔘 [Versão Interativa desta Aula](index.html)

---

### 🧩 Desafio Prático
**Calculadora de Área**

Calcula a área de um retângulo com `largura` de 10 e `altura` de 5.

```js
let largura = 10;
let altura = 5;

// Teu código aqui
```

<details>
<summary><b>Mostrar Solução</b></summary>

```js
const area = largura * altura;
console.log("A área é: " + area);
```
</details>
