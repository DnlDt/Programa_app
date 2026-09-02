function exemplosArrays() {
    console.log("Exemplos de Arrays Esta funcionando! que legal ;)");

    const numeros = [111, 222, 333, 444, 555];

    // Acessando elementos do array
    console.log(numeros[0]); // Saída: 111
    console.log(numeros[2]); // Saída: 333
    console.log(numeros.length); // Saída: 5

    const frutas = ["Maçã", "Banana", "Laranja", "Morango"];

    // Acessando elementos do array
    console.log(frutas[0]); // Saída: Maçã
    console.log(frutas[3]); // Saída: Morango
    console.log(frutas.length); // Saída: 4

    const pessoas = [
        { nome: "João", idade: 30 },
        { nome: "Maria", idade: 25 },
        { nome: "Pedro", idade: 35 }
    ];

    // Acessando elementos do array
    console.log(pessoas[0].nome); // Saída: João
    console.log(pessoas[1].idade); // Saída: 25
    console.log(pessoas.length); // Saída: 3


    const videoGames = ['Switch', 'PS4', 'XBox'];

    //adicionar um item novo no array
    videoGames.push('3DS'); // Adiciona ao final da array

    // remover o último item do array
    videoGames.pop(); // Remove o último item e retorna ele

    // saber o tamanho do array
    videoGames.length; // 3

    videoGames[0] = new Date();
    videoGames[1] = null;

    videoGames[10] = '3DS';

    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }


}

export default exemplosArrays;