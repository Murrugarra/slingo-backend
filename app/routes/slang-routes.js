
var Slang = require('../models/slang');

exports.configureRoutes = (router) => {

    router.get('/', (req, res) => {
        res.json({ message: 'hooray! welcome to our api!' });
    })

    router.route('/slangs')
        .post((req, res) => {
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
        })
        .get((req, res) => {
            let country = req.query.country
            Slang.find({country}, (err, slangs) => {
                if (err)
                    res.send(err)

                res.json(slangs)
            })
        })
    
    router.route('/slangs/:slang_id')
        .get((req, res) => {
            Slang.findById(req.params.slang_id, (err, slang) => {
                if (err)
                    res.send(err)

                res.json(slang)
            })
        })
        .put((req, res) => {
            
        })
        .delete((req, res) => {

        })

}