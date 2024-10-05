import './src/assets/scss/style.scss';
import './src/assets/scss/_cores.scss';
import { encontrouOuNao, iniciaEvento, pegaCaixaResultado, pegaValueDoInput} from './src/js/moduloFilter';


iniciaEvento("find", "click", encontraPrimeiroElemento);

function encontraPrimeiroElemento(){
    const listaFind = pegaValueDoInput("listaFind").split(',')
    const valorParaBuscarFind = pegaValueDoInput("valorParaBuscarFind")
    const caixaResultado = pegaCaixaResultado("caixaResultado__Find")
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
    const listaFilter = pegaValueDoInput("listaFilter").split(',')
    const valorParaBuscarFilter = pegaValueDoInput("valorParaBuscarFilter")
    const executaFilter = listaFilter.filter((e) => e == valorParaBuscarFilter)
    const caixaResultado = pegaCaixaResultado("caixaResultado__Filter")
    if(executaFilter.length == 0){
        caixaResultado.innerText = "0 encontrado!"
        caixaResultado.style.backgroundColor = "#D3455B";
    }else{
        caixaResultado.innerHTML = `${executaFilter.length} encontrados`
        caixaResultado.style.backgroundColor = "#1AAE9F";
    }
}

