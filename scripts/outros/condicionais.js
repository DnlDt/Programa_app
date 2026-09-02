function exemplosCondicionais() {
    console.log("condicionais.js rodando...");

    const possuiGraduacao = true;
    const possuiDoutorado = false;

    if (possuiGraduacao) {// esse if (possuigraduacao) é a mesma coisa q if(possuigraduacao == true) execute oq está abaixo
        console.log('Possui graduação');
    } else {
        console.log('Não possui graduação');
    }

    const diaSemana = Number(prompt('Digite um dia da semana: '));

    if (diaSemana === 1) {
        console.log('Segunda-feira');
    } else if (diaSemana === 2) {
        console.log('Terça-feira');
    } else if (diaSemana === 3) {
        console.log('Quarta-feira');
    } else if (diaSemana === 4) {
        console.log('Quinta-feira');
    } else if (diaSemana === 5) {
        console.log('Sexta-feira');
    } else if (diaSemana === 6) {
        console.log('Sábado');
    } else if (diaSemana === 7) {
        console.log('Domingo');
    } else {
        console.log('Dia inválido');
    }


    switch (diaSemana) { //Define qual variável será avaliada.
        case 1: // Significa "se diaSemana for igual a 1". Ele executa o console.log('Segunda-feira').
            console.log('Segunda-feira');
            break; // É o freio de mão do comando. Ele manda o programa sair do switch imediatamente assim que encontra o caso correto. Sem o break, o código continuaria executando os cases de baixo de forma descontrolada.
        case 2:
            console.log('Terça-feira');
            break; // O break apenas interrompe e sai da estrutura do switch. Ele "pula" todos os outros case que vêm abaixo e manda o JavaScript continuar a execução normal das linhas de código que estiverem depois do switch
        case 3:
            console.log('Quarta-feira');
            break;
        case 4:
            console.log('Quinta-feira');
            break;
        case 5:
            console.log('Sexta-feira');
            break;
        case 6:
            console.log('Sábado');
            break;
        case 7:
            console.log('Domingo');
            break;
        default: // é igual ao else
            console.log('Dia inválido');
            break;
    }



}

export default exemplosCondicionais;