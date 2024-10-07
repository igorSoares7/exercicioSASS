import './src/assets/scss/style.scss';
import './src/assets/scss/_cores.scss';
import {iniciaEvento, pegaCaixaResultado, pegaValueDoInput, ID_LISTA_FIND, ID_ELEMENTO_FIND, ID_RESULTADO_FIND,  ID_LISTA_FILTER, ID_ELEMENTO_FILTER,  ID_RESULTADO_FILTER} from './src/js/modulos';


iniciaEvento("find", "click", encontraPrimeiroElemento);

function encontraPrimeiroElemento(){
    const listaFind = pegaValueDoInput(ID_LISTA_FIND).split(',')
    console.log(listaFind)
    const valorParaBuscarFind = pegaValueDoInput(ID_ELEMENTO_FIND)
    console.log(valorParaBuscarFind)
    const caixaResultado = pegaCaixaResultado(ID_RESULTADO_FIND)
    const executaFind = listaFind.find((e) => e == valorParaBuscarFind)
    if(executaFind == undefined){
        caixaResultado.innerText = "Não encontrado!"
        caixaResultado.style.backgroundColor = "#D3455B";
    }else{
        caixaResultado.innerText = "Encontrado!"
        caixaResultado.style.backgroundColor = "#1AAE9F";
    }

   
}


iniciaEvento("filter", "click", encontraTodosElementos);

function encontraTodosElementos(){
    const listaFilter = pegaValueDoInput(ID_LISTA_FILTER).split(',')
    const valorParaBuscarFilter = pegaValueDoInput(ID_ELEMENTO_FILTER)
    const executaFilter = listaFilter.filter((e) => e == valorParaBuscarFilter)
    const caixaResultado = pegaCaixaResultado(ID_RESULTADO_FILTER)
    if(executaFilter.length == 0){
        caixaResultado.innerText = "0 encontrado!"
        caixaResultado.style.backgroundColor = "#D3455B";
    }else{
        caixaResultado.innerHTML = `${executaFilter.length} encontrados`
        caixaResultado.style.backgroundColor = "#1AAE9F";
    }
}

