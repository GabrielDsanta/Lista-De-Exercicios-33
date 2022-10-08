"use strict";
///////////Exercicio 01///////////
let Pergunta = String(prompt("Digite uma palavra e veja quantas vogais possui nela !"));
ContarVogais(Pergunta);
function ContarVogais(str) {
    let TamanhoPalavra = str.length;
    let Resultado = TamanhoPalavra - str.replace(/[aeiou à-ú]/gi, "").length;
    console.log(Resultado);
}
///////////Exercicio 02///////////
