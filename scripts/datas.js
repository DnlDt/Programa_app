function exemplosDatas() {
    console.log("datas.js rodando...");
    const agora = new Date(); // retorna a data/hora atual

    console.log(agora);

    const dataNascimento = new Date(1989, 11, 24);
    console.log(dataNascimento);

    agora.getDate() // Dia
    agora.getMonth() // Número dia mês ** Começa em 0
    agora.getFullYear() // Ano
    agora.getHours() // Hora
    agora.getMinutes() // Minutos
    agora.getSeconds() // Segundos
}

export default exemplosDatas;