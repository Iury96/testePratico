let faturamentoSP = 67836.43;
let faturamentoRJ = 36678.66;
let faturamentoMG = 29229.88;
let faturamentoES = 27165.48;
let faturamentoOutros = 19849.53;

let faturamentoTotal = faturamentoSP + faturamentoRJ + faturamentoMG + faturamentoES + faturamentoOutros;


let percentualSP = (faturamentoSP / faturamentoTotal) * 100;
let percentualRJ = (faturamentoRJ / faturamentoTotal) * 100;
let percentualMG = (faturamentoMG / faturamentoTotal) * 100;
let percentualES = (faturamentoES / faturamentoTotal) * 100;
let percentualOutros = (faturamentoOutros / faturamentoTotal) * 100;


console.log("Percentual de representação de cada estado no faturamento total da distribuidora:");
console.log(`- SP: ${percentualSP.toFixed(2)}%`);
console.log(`- RJ: ${percentualRJ.toFixed(2)}%`);
console.log(`- MG: ${percentualMG.toFixed(2)}%`);
console.log(`- ES: ${percentualES.toFixed(2)}%`);
console.log(`- Outros: ${percentualOutros.toFixed(2)}%`);
