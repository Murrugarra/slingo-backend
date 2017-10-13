var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var SlangSchema = new Schema({
    slang: String,
    meaning: String,
    country: String,
    synonyms: [{
        slang_id: String,
        slang: String
    }],
    examples: [String]
});

module.exports = mongoose.model('Slang', SlangSchema)