const conversor = require("../services/conversorService")

function converterMedida(req, res){
    const { metro } = req.body

    const valorConvertido = conversor(metro, "hm")

    return res.json({valorConvertido})
}

module.exports = converterMedida