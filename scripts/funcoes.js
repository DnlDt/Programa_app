function exemploFuncoes() {
    console.log("Exemplos de Funções Esta funcionando! que legal ;)");



    function calcular(numero1, numero2, operacao) {
        switch (operacao) {
            case '+':
                return numero1 + numero2;
            case '-':
                return numero1 - numero2;
            case '*':
                return numero1 * numero2;
            case '/':
                return numero1 / numero2;
            default:
                return "Operação inválida";
        }
    }
    const soma = calcular('+', 10, 5);
    console.log(`Resultado da soma: ${soma}`);

    const gerarNumeroAleatorio = () => {
        return Math.random();
    }

    // Chamando a função armazenando o valor retornado
    const numero = gerarNumeroAleatorio();
    console.log(`O número gerado pela função é: ${numero}`);

    const somar = (a, b) => {
        return a + b;
    }
    // Chamando a função e armazenando o valor retornado
    var resultado = somar(5, 3);
    console.log(`Resultado da soma: ${resultado}`);


    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // Filtrando apenas os números pares
    const numerosPares = numeros.filter((numero) => {
        return numero % 2 === 0
    });

    console.log(numerosPares); // Saída: [2, 4, 6, 8, 10]

    const pessoas = [
        { nome: "João", idade: 25 },
        { nome: "Maria", idade: 30 },
        { nome: "Pedro", idade: 17 },
        { nome: "Ana", idade: 20 }
    ];

    function filtroMaiorIdade(pessoa) {
        return pessoa.idade >= 18;
    }
    // Filtrando apenas as pessoas com idade maior ou igual a 18 anos
    // const pessoasMaioresDeIdade = pessoas.filter(pessoa => pessoa.idade >= 18);
    const pessoasMaioresDeIdade = pessoas.filter(filtroMaiorIdade);

    console.log(pessoasMaioresDeIdade);

    const outrosNumeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

    function dobrarNumero(numero) {
        numero * 2;
    }

    // Mapeando o array para o seu dobro
    // const numerosDobrados = outrosNumeros.map((numero) => {
    //     return numero * 2
    // });
    const numerosDobrados = outrosNumeros.map(dobrarNumero);

    console.log(numerosDobrados);

    const novasPessoinhas = [
        { nome: "João", idade: 25 },
        { nome: "Maria", idade: 30 },
        { nome: "Pedro", idade: 17 },
        { nome: "Ana", idade: 20 }
    ];

    // Mapeando o array para um array de nomes
    const nomesPessoas = novasPessoinhas.map((pessoa) => {
        if (pessoa.idade >= 18) {
            pessoa.maiorIdade = true
        } else {
            pessoa.maiorIdade = false
        }

        return pessoa
    });

    console.log(nomesPessoas);
    // Saída: ["João", "Maria", "Pedro", "Ana"]


}



export default exemploFuncoes;