const {Schema, model}=require('mongoose');

const imageSchema = new Schema({
    title: {type:String},
    description:{type: String},
    path: {type:String},
    originalname: {type:String},
    mimeType: {type:String},
    size: {type:Number},
    created_at: {type: Date, default: Date.now()}
});

//metodo model de mongoose
module.exports = model('Image', imageSchema)
