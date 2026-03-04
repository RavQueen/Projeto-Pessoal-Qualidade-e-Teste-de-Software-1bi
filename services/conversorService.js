function conversor(metro, unidade) {
    switch (unidade) {
        case ("mm"):
            return `${metro * 1000}mm`
        case ("cm"):
            return `${metro * 100}cm`
        case ("dm"):
            return `${metro * 10}dm`
        case ("dam"):
            return `${metro / 10}dam`
        case ("hm"):
            return `${metro / 100}hm`
        case ("km"):
            return `${metro / 1000}km`
    }
}

module.exports = conversor