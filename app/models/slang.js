var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var SlangSchema = new Schema({
    slang: String,
    meaning: String,
    country: String,
    synonyms: [String]
});

module.exports = mongoose.model('Slang', SlangSchema)