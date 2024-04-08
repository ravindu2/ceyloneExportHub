const mongoose = require('mongoose');

const UserSchema =  new mongoose.Schema({
    id: String,
    img: String,
    name: String,
    price: String,
    newprice: String,
    discount: String,

})

const UserModel =  mongoose.model("products", UserSchema)
module.exports = UserModel