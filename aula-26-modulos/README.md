# Aula 26: Módulos (ES6 Modules)

**O que vais aprender nesta aula:**
- Como separar o código em vários ficheiros `.js`.
- `export` e `import`.
- `type="module"` no HTML.

---

### 🧠 Teoria Rápida

#### 1. Named Exports
Podes exportar várias coisas com o seu nome original.
```js
// math.js
export const PI = 3.14;
export function somar(a, b) { return a + b; }
```
```js
// main.js
import { somar, PI } from './math.js';
```

#### 2. Default Exports
Só um por ficheiro. Útil para classes ou funções principais.
```js
// user.js
export default class User { ... }
```
```js
// main.js (podes dar o nome que quiseres)
import Utilizador from './user.js';
```

---

### ⚠️ Requisito do Servidor
Para user módulos, não podes apenas arrastar o `index.html` para o navegador. Tens de usar um servidor local (como o Laragon que está a rodar, ou a extensão "Live Server" do VS Code). Se não, terás erros de **CORS**.

---

### ✅ Verificação de Conhecimento
> 🔘 [Versão Interativa desta Aula](index.html)

---
