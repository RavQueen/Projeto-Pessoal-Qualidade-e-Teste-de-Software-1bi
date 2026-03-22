const banco = require('../database/database')

function conversor(metro, unidade) {

    if(metro == undefined || unidade == undefined){
        return "Algum dos dados está vazio, por favor tente novamente."
    } else if(isNaN(metro)){
        return "O valor de metros está inválido, tente novamente."
    } else if (unidade !== "mm" && unidade !== "cm" && unidade !== "dm" && unidade !== "dam" && unidade !== "hm" && unidade !== "km"){
        return "O valor da unidade de conversão está inválido, tente novamente."
    }

    let resultado

    switch (unidade) {
        case "mm":
            resultado = metro * 1000
            break
        case "cm":
            resultado = metro * 100
            break
        case "dm":
            resultado = metro * 10
            break
        case "dam":
            resultado = metro / 10
            break
        case "hm":
            resultado = metro / 100
            break
        case "km":
            resultado = metro / 1000
            break
        default:
            return "Erro inesperado."
    }

    let dadosResultado = {
        medida: metro,
        unidade: unidade,
        medidaConvertida: resultado,
        resultadoFinal: `${resultado} ${unidade}`,
        data: new Date()
    }

    banco.push(dadosResultado)

    return dadosResultado.resultadoFinal
}

conversor.listarResultados = () => {
    return banco
}

module.exports = conversor