function exemplosVariaveis() {
    console.log("variaveis.js rodando...");

    const nome = 'João Silva';  // String
    const idade = 18; // Number
    const possuiFaculdade = true; // Boolean
    const time = "Brasil"; // String
    const comida = null; // Null
    const novoObjeto = {} // Object
    const hoje = new Date(); //vai dizer o dia o mes o ano e o horario
    console.log("Typeof nome:", typeof nome); // type of = tipo da variavel, por exemplo string number object etc...
    console.log("Typeof idade:", typeof idade);
    console.log("Typeof possuiFaculdade:", typeof possuiFaculdade);
    console.log("Typeof time:", typeof time);
    console.log("Typeof comida:", typeof comida);
    console.log("Typeof novoObjeto:", typeof novoObjeto);
    console.log("Typeof hoje:", typeof hoje);

    const gols = 1000;
    const frase = 'Pelé fez ' + gols + ' gols';

    'JavaScript é "super" fácil';
    "JavaScript é 'super' fácil";

    "JavaScript é \"super\" fácil";

    "JavaScript é super fácil"; // Inválido

    `JavaScript é "super" fácil"`;

    const fraseDois = `Pelé fez ${gols} gols`;

    const expoente = 3 ** 2; // 9 "Ao Quadrado"
    const modulo = 15 % 2; // 1"Resto da divisão"

    const soma = '100' + 50; // 10050
    const subtracao = '100' - 50; // 50
    const multiplicacao = '100' * '2'; // 200
    const divisao = 'Blabla 100' / 2; // NaN (Not a Number)

    const numero = 70;
    const unidade = 'kg';
    const peso = numero + unidade; // '80kg'
    const pesoPorDois = peso / 2; // NaN (Not a Number)

    let incremento = 5;
    console.log(incremento++); // 5 soma depois de mostrar o resultado
    console.log(incremento); // 6

    let incremento2 = 5;
    console.log(++incremento2); // 6 soma antes de mostrar o resultado 
    console.log(incremento2); // 6 

    const frase3 = 'Isso é um teste';
    +frase3; // NaN o + ou - antes de uma variavel tenta converter a variavel em numero 
    -frase3; // NaN

    const idade2 = '28';
    +idade2; // 28 (número) 
    -idade2; // -28 (número)
    console.log(+idade2 + 5); // 33 

    const possuiFaculdade2 = true;
    console.log(+possuiFaculdade2); // 1

    const numeros = [3, 7, 15, 19, 53, 9, 10, 30, 34, 12];

    const usuarios = [
        { nome: "João", sobrenome: "Silva", idade: 20, temPet: true },
        { nome: "Maria", sobrenome: "Souza", idade: 15, temPet: true },
        { nome: "Pedro", sobrenome: "Santos", idade: 17, temPet: false },
        { nome: "Ana", sobrenome: "Lima", idade: 25, temPet: false },
        { nome: "Lucas", sobrenome: "Mendes", idade: 12, temPet: true }
    ];

    // 14. Números maiores que 20
    console.log("\n--- Exercício 14 ---");
    let length_num = numeros.length;
    for (let c = 0; c < length_num; c++) {
        if (numeros[c] > 20) {
            console.log(numeros[c]);
        }
    }

    // 15. Números ímpares
    console.log("\n--- Exercício 15 ---");
    for (let c = 0; c < numeros.length; c++) {
        if (numeros[c] % 2 === 1) {
            console.log(numeros[c]);
        }
    }

    // 16. Usuários maiores de idade 
    console.log("\n--- Exercício 16 ---");
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].idade >= 18) {
            console.log(usuarios[i]);
        }
    }

    // 17. Usuários menores de idade (< 18) com animais de estimação
    console.log("\n--- Exercício 17 ---");
    for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].idade < 18 && usuarios[i].temPet) {
            console.log(usuarios[i]);
        }
    }

    // 18. Lista de strings com "Nome Sobrenome"
    console.log("\n--- Exercício 18 ---");
    const nomesCompletos = [];
    for (let i = 0; i < usuarios.length; i++) {
        nomesCompletos.push(`${usuarios[i].nome} ${usuarios[i].sobrenome}`);
    }
    console.log(nomesCompletos);

    // 19. FizzBuzz (Múltiplos de 3="Fizz", 5="Buzz", ambos="FizzBuzz")
    console.log("\n--- Exercício 19 ---");
    const resultadoFizzBuzz = [];
    for (let i = 0; i < numeros.length; i++) {
        const num = numeros[i];
        if (num % 3 === 0 && num % 5 === 0) {
            resultadoFizzBuzz.push("FizzBuzz");
        } else if (num % 3 === 0) {
            resultadoFizzBuzz.push("Fizz");
        } else if (num % 5 === 0) {
            resultadoFizzBuzz.push("Buzz");
        } else {
            resultadoFizzBuzz.push(num);
        }
    }
    console.log(resultadoFizzBuzz);
}

export default exemplosVariaveis;