import '../assets/scss/_cores.scss';

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



export function encontrouOuNao(resultado, undefined, caixaResultado){
if(resultado == undefined){
        caixaResultado.innerText = "Não encontrado!"
        caixaResultado.style.backgroundColor = "#D3455B;"
    }
}
