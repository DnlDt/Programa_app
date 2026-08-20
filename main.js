import exemplosVariaveis from "./scripts/variaveis.js";
import exemplocondicionais from "./scripts/condicionais.js";
//import ... from "./scripts/variaveis.js": É o arquivo main.js buscando essa função no caminho/local indicado para poder usá-la localmente.


const btnVariaveis = document.getElementById("btnVariaveis");
btnVariaveis.addEventListener("click", exemplosVariaveis)
//Significa "escutador de eventos". Ele fica de "vigia" no elemento HTML que você selecionou:
//btnVariaveis: O botão que você pegou do HTML pelo ID.
//"click": O tipo de evento que ele está escutando (quando o usuário clica no botão).
//exemplosVariaveis: A função que será disparada toda vez que esse clique acontecer.

document.getElementById("btnCondicionais").addEventListener("click", exemplocondicionais)