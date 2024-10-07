import '../assets/scss/_cores.scss';

export const ID_LISTA_FIND = "listaFind"
export const ID_ELEMENTO_FIND = "valorParaBuscarFind"
export const ID_RESULTADO_FIND = "caixaResultado__Find"
export const ID_LISTA_FILTER = "listaFilter"
export const ID_ELEMENTO_FILTER = "valorParaBuscarFilter"
export const ID_RESULTADO_FILTER = "caixaResultado__Filter"

export function iniciaEvento(elemento, evento, func){
    const foi = document.getElementById(elemento)
    foi.addEventListener(evento, func)
}

export function pegaValueDoInput(input){
    const value = document.getElementById(input).value
    return value
}

export function pegaCaixaResultado(id){
    const resultado = document.getElementById(id)
    return resultado
}



// export function encontrouOuNao(resultado, undefined, caixaResultado){
// if(resultado == undefined){
//         caixaResultado.innerText = "Não encontrado!"
//         caixaResultado.style.backgroundColor = "#D3455B;"
//     }else{
//         caixaResultado.innerText = "Encontrado!"
//         caixaResultado.style.backgroundColor = "#1AAE9F";
//     }

// }
