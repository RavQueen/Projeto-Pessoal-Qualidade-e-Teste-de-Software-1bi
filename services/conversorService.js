function conversor(metro, unidade) {
    switch (unidade) {
        case ("mm"):
            return `${metro}m equivale à ${metro * 1000}mm`
        case ("cm"):
            return `${metro}m equivale à ${metro * 100}cm `
        case ("dm"):
            return `${metro}m equivale à  ${metro * 10}dm `
        case ("dam"):
            return `${metro}m equivale à ${metro / 10}dam`
        case ("hm"):
            return `${metro}m equivale à ${metro / 100}hm`
        case ("km"):
            return `${metro}m equivale à ${metro / 1000}km`
    }
}