module.exports = function(app) {
    const MongoClient = require('mongodb').MongoClient;
    // const assert = require('assert');

    //Connection URL
    const url = 'mongodb://localhost:27017';

    app.all('/productList', (_, res) => {
        require('./read')(MongoClient, url, function(products){
            res.send({success: true, products: products})
        })
    })


    app.all('/delete', (req, res) => {
        var id = req.query.id
        require('./remove')(MongoClient, url, id, function(products){
            res.send({success: true, products: products})
        })
    })

    app.all('/add', (req, res) => {
        var name = req.query.name
        var price = req.query.price
        var description = req.query.description
        console.log("name: " + name + "price: " + price + "description: " + description)
        require('./add')(MongoClient, url, name, price, description, function(products){
            res.send({success:true, products: products})
        })
    })
    app.all('/update', (req, res) => {
        var id = req.query.id
        var name = req.query.name
        var price = req.query.price
        var description = req.query.description
        console.log("id: " + id + "name: " + name + "price: " + price + "description: " + description)
        require('./update')(MongoClient, url, id, name, price, description, function(products){
            res.send({success:true, products: products})
        })
    })
    app.all('/search', (req, res) => {
        var query = req.query.query
        require('./search')(MongoClient, url, query, function(products){
            res.send({success:true, products: products})
        })
    })

}
    