import exemplosVariaveis from "./scripts/variaveis.js";
import exemplosCondicionais from "./scripts/outros/condicionais.js";
import exemplosDatas from "./scripts/datas.js";
import exemplosObjetos from "./scripts/objetos.js"
import exemplosArrays from "./scripts/arrays.js";
import exemploFuncoes from "./scripts/funcoes.js";

const btnVariaveis = document.getElementById("btnVariaveis");
btnVariaveis.addEventListener("click", exemplosVariaveis);

document.getElementById("btnCondicionais")
    .addEventListener("click", exemplosCondicionais)

document.getElementById("btnDatas")
    .addEventListener("click", exemplosDatas)

document.getElementById("btnObjetos")
    .addEventListener("click", exemplosObjetos)

document.getElementById("btnArrays")
    .addEventListener("click", exemplosArrays)

document.getElementById("btnFuncoes")
    .addEventListener("click", exemploFuncoes)