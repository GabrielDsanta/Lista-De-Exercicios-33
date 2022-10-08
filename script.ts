

///////////Exercicio 01///////////

// let Pergunta = String(prompt("Digite uma palavra e veja quantas vogais possui nela !"))

// ContarVogais(Pergunta)

// function ContarVogais(str: string){
//     let TamanhoPalavra = str.length
//     let Resultado = TamanhoPalavra - str.replace(/[aeiou à-ú]/gi,"").length
//     console.log(Resultado)
// }





///////////Exercicio 02///////////


// let Pergunta = String(prompt("Digite uma palavra e veja o meio dela !"))

// AcharMeioPalavra(Pergunta)

// function AcharMeioPalavra(str: string){
//     if(str.length % 2 == 0){
//         console.log(str[str.length / 2 - 1] + str[str.length / 2])
//     }

//     else{
//         let ListaDeLetras = Pergunta.split("")
//         ListaDeLetras.shift()
//         console.log(ListaDeLetras[ListaDeLetras.length / 2 - 1])
//     }
// }





///////////Exercicio 02///////////

let Pergunta = String(prompt("Digite um número para ordena-lo !"))

OrdernarNumeros(Pergunta)


function OrdernarNumeros(Pergunta){
    let str: string = ""
    let ListaDeNumeros = Pergunta.split("")

    for (let index = 0; index < 10; index++){
        for (let i = 0; i <= index; i++) {
            if(ListaDeNumeros[i] == index){
                ListaDeNumeros[i] = +str
                ListaDeNumeros[i] = index
            }
        }
    }

    ListaDeNumeros.sort()
    ListaDeNumeros.reverse()

    console.log(ListaDeNumeros)
}