# Aula 27: Classes e POO (Programação Orientada a Objetos)

**O que vais aprender nesta aula:**
- Criar moldes (Classes).
- Criar objetos (Instâncias).
- Herança (Extends).

---

### 🧠 Teoria Rápida

O JavaScript é baseado em protótipos, mas a sintaxe de `class` torna tudo mais familiar para quem vem de outras linguagens.

#### 1. Sintaxe Básica
```js
class Carro {
    constructor(marca) {
        this.marca = marca;
    }

    buzinar() {
        console.log("Beep beep!");
    }
}

const meuCarro = new Carro("Toyota");
meuCarro.buzinar();
```

#### 2. Herança (Extends)
Reaproveitar código de uma classe "Pai".

```js
class Ferrari extends Carro {
    constructor() {
        super("Ferrari"); // Chama o construtor do Pai
    }

    turbo() {
        console.log("Vrooooom!");
    }
}
```

---

### ✅ Verificação de Conhecimento
> 🔘 [Versão Interativa desta Aula](index.html) (Contém um jogo de batalha!)

---
