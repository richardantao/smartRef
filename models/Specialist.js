
const Schema = require("mongoose").Schema;
const model = require("mongoose").model;

const SpecSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: {type: String, required: true},
    sex: {type: String, required: true},
    email:{type: String, required: true},
    type: {type: String, required: true},
    experience: {type: Number, required: true},
    availability: {type: Date, required: true},
    distance: {type: String, required: true}//,
    // score: {type: Number, default: 0},
    // ranking: {type: Number, default: 0}    
});

module.exports = model("specialist", SpecSchema);
