

///////////Exercicio 01///////////

// let Pergunta = String(prompt("Digite uma palavra e veja quantas vogais possui nela !"))

// ContarVogais(Pergunta)

// function ContarVogais(str: string){
//     let TamanhoPalavra = str.length
//     let Resultado = TamanhoPalavra - str.replace(/[aeiou à-ú]/gi,"").length
//     console.log(Resultado)
// }



///////////Exercicio 02///////////


let Pergunta = String(prompt("Digite uma palavra e veja o meio dela !"))

AcharMeioPalavra(Pergunta)

function AcharMeioPalavra(str: string){
    if(str.length % 2 == 0){
        console.log(str[str.length / 2 - 1] + str[str.length / 2])
    }

    else{
        let ListaDeLetras = Pergunta.split("")
        ListaDeLetras.shift()
        console.log(ListaDeLetras[ListaDeLetras.length / 2 - 1])
    }
}
