var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');
var Schema = mongoose.Schema;
var schema = new mongoose.Schema({
    playerone: String,
    playertwo: String,
    winner: String,
    results: Array,
    createdAt: { type: Date, default: Date.now },
},{
    usePushEach: true
});
schema.plugin(mongoosePaginate);
module.exports = mongoose.model('Game', schema);
