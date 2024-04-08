const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserModel = require('./models/products');


const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/ceylonexporthub")

app.get('/getProduct', (req, res) => {
    //return res.json({})
    UserModel.find()
    .then(products => res.json(products))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Server is running")
});