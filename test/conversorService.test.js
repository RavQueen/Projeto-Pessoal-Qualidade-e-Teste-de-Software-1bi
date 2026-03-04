const conversor = require('../services/conversorService')

describe("Testes dos requisitos funcionais do conversorService", () => {
    test("Deve converter 10 metros para milímetros", () => {
        expect(conversor(10, "mm")).toBe("10000mm")
    })

    test("Deve converter 10 metros para centimetros", () => {
        expect(conversor(10, "cm")).toBe("1000cm")
    })

    test("Deve converter 10 metros para decimetro", () => {
        expect(conversor(10, "dm")).toBe("100dm")
    })

    test("Deve converter 10 metros para decâmetro", () => {
        expect(conversor(10, "dam")).toBe("1dam")
    })

    test("Deve converter 10 metros para hectômetro", () => {
        expect(conversor(10, "hm")).toBe("0.1hm")
    })

    test("Deve converter 10 metros para kilometro", () => {
        expect(conversor(10, "km")).toBe("0.01km")
    })
})

// não funcionais
//Teste de robustez (entradas inválidas ou inesperadas)
//Teste de desempenho (execução repetida em alta escala)

describe("Testes dos requisitos não-funcionais do conversorService", () => {
    test("Entradas inválidas devem retornar mensagem de erro.")
})