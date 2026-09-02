function exemplosObjetos() {
    console.log("objetos.js rodando...")

    const carro = {
        marca: "Toyota",
        modelo: "Corolla",
        ano: 2024,
        cor: "Prata",
        zero: true
    };

    console.log("Dados do Carro:", carro);
    // Acessando propriedades do objeto
    console.log(carro.marca);
    console.log(carro.modelo);
    console.log(carro.ano);
    console.log(carro.cor);
    console.log(carro.zero);

    // Manipulando propriedades do objeto
    carro.ano = 2025;
    carro.cor = "Branco";
    carro.zero = "Ndgsadiugsadiugsadgsad"

    const nome = 'Thiago';
    nome.length; // 6
    nome.replace('Th', 'T'); // Tiago

    const altura = 1.8;

    altura.toString(); // '1.8'
    altura.toFixed(); // '2'
    altura.toPrecision(2); // '1.8'
}

export default exemplosObjetos;