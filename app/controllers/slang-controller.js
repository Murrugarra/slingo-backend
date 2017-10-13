var Slang = require('../models/slang')

// /slangs

exports.createSlang = (req, res) => {
    var slang = new Slang()
    slang.slang = req.body.slang
    slang.country = req.body.country
    slang.synonyms = req.body.synonyms
    slang.meaning = req.body.meaning

    slang.save((err) => {
        if (err)
            res.send(err)

        res.json(slang)
    })
}

exports.retrieveSlangs = (req, res) => {
    let country = req.query.country            
    Slang.find({country}, {_id: 1, slang: 2, meaning: 3, synonyms: 4}, (err, slangs) => {
        if (err)
            res.send(err)

        res.json(slangs)
    })
}

// /slangs/:slang_id

exports.getSlang = (req, res) => {            
    Slang.findById(req.params.slang_id, {_id: 1, slang: 2, meaning: 3, synonyms: 4, examples: 5}, (err, slang) => {
        if (err)
            res.send(err)

        res.json(slang)
    })
}

exports.updateSlang = (req, res) => {}

exports.deleteSlang = (req, res) => {}