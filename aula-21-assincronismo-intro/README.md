# Aula 21: Callbacks e Temporizadores

**O que vais aprender nesta aula:**
- `setTimeout`: Executa uma vez.
- `setInterval`: Executa repetidamente.
- `clearInterval`: Pára o temporizador.

---

### 🧠 Teoria (com Analogia e Contexto Real)
O código normal corre de cima para baixo. Código assíncrono corre "em paralelo" (mais ou menos) sem bloquear o resto.

- **Analogia do quotidiano**: Cozinhar.
    - Cortar cebola (Síncrono): Tens de estar lá a fazer.
    - Assar no forno (Assíncrono): Pões lá, defines o temporizador e vais fazer outra coisa. Quando o temporizador apita (Callback), voltas para tirar.

**Sintaxe:**
```js
// Daqui a 2 segundos...
setTimeout(() => {
    console.log("Olá do futuro!");
}, 2000);
```

---

### 💻 Prática (Orientada e Progressiva)

#### Exemplo: Relógio Digital
```js
setInterval(() => {
    let data = new Date();
    let horas = data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds();
    console.log(horas);
}, 1000); // Atualiza a cada segundo
```

---

### ✅ Verificação de Conhecimento
**Testa o que aprendeste.**

1. Quanto é 1000ms? (1 segundo).
2. O `setTimeout(funcao, 0)` executa imediatamente antes do resto do código? (Não, vai para o fim da fila na mesma!).
3. O `setInterval` pára sozinho? (Não, precisa de `clearInterval`).

> 🔘 [Versão Interativa desta Aula](index.html)

---

### 🧩 Desafio Prático
Cria uma contagem decrescente na consola usando `setInterval`.
Começa em 10.
Mostra 10, 9, 8...
Quando chegar a 0, mostra "Lançamento!" e pára o intervalo.

```js
// Teu código
```
