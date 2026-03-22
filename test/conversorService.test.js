const conversor = require('../services/conversorService')
const banco = require("../database/database")

describe("Testes dos requisitos funcionais do conversorService", () => {
    test("Deve converter 10 metros para milímetros", () => {
        expect(conversor(10, "mm")).toBe("10000 mm")
    })

    test("Deve converter 10 metros para centimetros", () => {
        expect(conversor(10, "cm")).toBe("1000 cm")
    })

    test("Deve converter 10 metros para decimetro", () => {
        expect(conversor(10, "dm")).toBe("100 dm")
    })

    test("Deve converter 10 metros para decâmetro", () => {
        expect(conversor(10, "dam")).toBe("1 dam")
    })

    test("Deve converter 10 metros para hectômetro", () => {
        expect(conversor(10, "hm")).toBe("0.1 hm")
    })

    test("Deve converter 10 metros para kilometro", () => {
        expect(conversor(10, "km")).toBe("0.01 km")
    })
})

describe("Testes dos requisitos não-funcionais do conversorService", () => {
    test("Entradas inválidas devem retornar mensagem de erro.", () => {
        expect(conversor()).toBe("Algum dos dados está vazio, por favor tente novamente.")
    })

    test("Entrada diferentes de números no parâmetro de metros deve retornar mensagem de erro.", () => {
        expect(conversor("Hello World", "mm")).toBe("O valor de metros está inválido, tente novamente.")
    })

    test("Entrada diferente de unidade de medidas no parâmetro de unidade deve retornar mensagem de erro.", () => {
        expect(conversor(5, "Hello World")).toBe("O valor da unidade de conversão está inválido, tente novamente.")
    })
})

describe("Teste sobre o banco de dados.", () => {
    beforeEach(() => {
        banco.length = 0
    })

    test("Deve armazenar os resultados no banco", () => {
        conversor(5, "cm")
        expect(banco.length).toBe(1)
    })

    test("Deve listar resultados anteriores", () => {
        conversor(5, "cm")
        conversor(6, "mm")

        const historico = conversor.listarResultados()
        expect(historico.length).toBe(2)
        expect(historico[0].medida).toBe(5)
        expect(historico[1].unidade).toBe("mm")
    })
})