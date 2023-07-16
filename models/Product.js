const mongoose = require('mongoose');

const prodSchema = new mongoose.Schema({
    prodName : {
        type : String,
        required : [true, "Product name is required."]
    },
    prodDesc : {
        type : String,
        required : [true, "Product Description is required."]
    },
    prodPrice : {
        type : Number,
        required : [true, "Product price is required."]
    },
    prodAvail : {
        type : Boolean,
        default : true,
    },
    prodCreatedOn : {
        type : Date,
        default : new Date()
    },
})


const Product = mongoose.model('Product', prodSchema);

module.exports = Product;