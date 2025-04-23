//Declaração de uma variável contendo uma string
let frase = 'Opa! Tudo joia?';

//Declaração de uma variável contendo um número dentro de uma string
let numeroString = '23';

//Declaração de uma variável com a sua idade
let idade = 30;

//Declaração de duas variáveis, uma com seu nome e outra com seu sobrenome e some as mesmas
let nome = 'Artur';
let sobrenome = 'Lobo';
let nomeCompleto = `${nome} ${sobrenome}`;

//Frase em uma variável
let mensagem = 'Você está aprendendo JavaScript!';

//Verificação do tipo da variável que contém o seu nome
console.log(`nomecompleto: ${typeof nome}`);

//Declaração das seguintes variáveis
let cidade = 'Fortaleza';
let profissao = 'Designer';

//Frase com concatenação moderna
let frase1 = `Meu nome completo é ${nome} ${sobrenome}, tenho ${idade} anos,
moro em ${cidade}e sou ${profissao}.`;
console.log(frase1);

//Mensagem mais elaborada
let frase2 = `Olá! Meu nome é ${nome} ${sobrenome} e tenho ${idade} anos.
Atualmente, trabalho como ${profissao} na bela cidade de ${cidade}.`;
console.log(frase2);
