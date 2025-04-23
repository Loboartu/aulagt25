//soma
//subtração
//multiplicação
//divisão

let numero1 = Number(prompt(`Digite um número`))
let numero2 = Number(prompt(`Digite outro número`))

let soma = numero1 + numero2
let subtracao = numero1 - numero2
let multiplicacao = numero1 * numero2
let divisao = numero1 / numero2

console.log (`A soma é ${soma}, a subtração é ${subtracao}, a multiplicação é ${multiplicacao} e a divisão é ${divisao}`)

    let outraSoma = `20` + 2 //concatenação output -> 202
    let outraSubtração = `20` - 2 // a conversão ela ocorre nos outros casos, não para soma.

    //operadores de atribuição (=, +=, -=, *=, /=)

    let dado = `alguma informação`

    let x = 5
    console.log(x)
    x = x + 5 // 10
    console.log(x)
     x += 5 //10
     console.log(x)

     //operadores de comparação (>, <, >=, ==, !=, ===, !==) retorno booleano (true ou false)

     console.log(3>6)
     console.log(10>4) //true
     console.log(10*3 >= 30/3) //true
     console.log(2== `2`) //true
     console.log(2=== `2`) //false
     console.log(2!== `2`) //true

     // operadores lógicos (&&, ||, !)

     console.log(10 == 1 && 20 != 5) //as duas condições verdadeiras
     console.log(20 == 20 && 3 < 10)
     console.log(10 === '10'|| 20 > 5) //true

     let x = 10
     let y = 20

     let comparacao = x > y //false
     console.log(!comparacao) //falsy

     //truthy e falsy

     let nome = ""