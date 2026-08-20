function exemplosVariaveis() {
    console.log("Olá, mundo! origem variaveis.js");
}
//O que significa Exportar e Importar? Por padrão no JavaScript modernizado, cada arquivo é um "mundo isolado" (módulo). O que você cria dentro de variaveis.js fica invisível para o resto do sistema.


export default exemplosVariaveis;
//export default: É a forma de dizer: "Estou tornando esta função pública para quem quiser usá-la em outro arquivo".