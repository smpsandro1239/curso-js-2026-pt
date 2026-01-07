# Aula 7: Condicionais Avançadas

**O que vais aprender nesta aula:**
- Lidar com múltiplas opções usando `else if`.
- A estrutura `switch` para menus.
- O operador ternário `? :`.

---

### 🧠 Teoria (com Analogia e Contexto Real)
A vida não é só preto e branco. Existem várias cores.

- **Analogia do quotidiano**: O Semáforo.
    - Se **Verde** ➜ Avança.
    - Senão Se **Amarelo** ➜ Abranda.
    - Senão (Vermelho) ➜ Pára.

---

### 💻 Prática (Orientada e Progressiva)

#### Exemplo 1: Escada `else if`
```js
let nota = 15;

if (nota >= 18) {
    console.log("Excelente! 🏆");
} else if (nota >= 10) {
    console.log("Passaste. 👍");
} else {
    console.log("Chumbaste. 📚");
}
```

#### Exemplo 2: `switch`
Ótimo para valores exatos.
```js
let comando = "Play";

switch (comando) {
    case "Play":
        console.log("A reproduzir vídeo ▶️");
        break;
    case "Pause":
        console.log("Vídeo em pausa ⏸️");
        break;
    default:
        console.log("Comando desconhecido");
}
```

#### Exemplo 3: Ternário
Um `if/else` numa só linha.
```js
let idade = 20;
//                 (Condição) ? (Se Verdade) : (Se Falso)
let tipoBilhete = idade < 12 ? "Criança" : "Adulto";

console.log(tipoBilhete); // "Adulto"
```

---

### ✅ Verificação de Conhecimento
**Testa o que aprendeste.**

1. O que acontece se te esqueceres do `break` no switch?
2. Quando deves usar o operador ternário?
3. O `else if` precisa de um `else` no final? (Não obrigatório, mas recomendável).

> 🔘 [Versão Interativa desta Aula](index.html)

---

### 🧩 Desafio Prático
**Classificador de Filmes**
Usa um `if / else if / else` para classificar um filme baseada na idade.
- Se idade < 12: "Infantil"
- Se idade < 18: "Adolescente"
- Senão: "Adulto"

```js
let idadeEspectador = 15;
// Teu código
```

<details>
<summary><b>Mostrar Solução</b></summary>

```js
if (idadeEspectador < 12) {
    console.log("Infantil");
} else if (idadeEspectador < 18) {
    console.log("Adolescente");
} else {
    console.log("Adulto");
}
```
</details>
