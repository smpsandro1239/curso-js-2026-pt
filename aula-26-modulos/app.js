import { PI, somar } from './math.js';
import formatarEUR from './utils.js';

const output = document.getElementById('console-output');

try {
    const resultadoSoma = somar(10, 20);
    const resultadoFormatado = formatarEUR(resultadoSoma);

    output.innerHTML = `
    > import { somar } from './math.js';<br>
    > import formatarEUR from './utils.js';<br><br>

    <span style="color: #ccc">Cálculos realizados com módulos:</span><br>
    10 + 20 = <strong>${resultadoSoma}</strong><br>
    Valor de PI = <strong>${PI}</strong><br>
    Formatado = <strong>${resultadoFormatado}</strong><br>
    <br>
    <span style="color: #4CAF50">✅ Módulos carregados com sucesso!</span>
    `;
} catch (error) {
    output.innerHTML = `<span style="color: red">❌ Erro ao carregar módulos: ${error.message}</span>`;
}
