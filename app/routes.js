let slangController = require('./controllers/slang-controller')

exports.config = (router) => {

    router.get('/', (req, res) => {
        res.json({ message: 'hooray! welcome to our api!' });
    })

    router.route('/slangs')
        .post(slangController.createSlang)
        .get(slangController.retrieveSlangs)
    
    router.route('/slangs/:slang_id')
        .get(slangController.getSlang)
        .put(slangController.updateSlang)
        .delete(slangController.deleteSlang)

}