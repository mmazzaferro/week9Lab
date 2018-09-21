module.exports = function(MongoClient, url, name, price, description, callback){
    MongoClient.connect(url, {poolSize:10, useNewUrlParser: true}, function(err, client){
        const db = client.db('week9')
        console.log(name + " " + price + " " + description)
        var item = { name: name,
         price: price,
         description: description }
        db.collection("products").insertOne(item, function(err, res){
            if (err) throw err;
            console.log("Item inserted");
            client.close();
            callback();
        })
    })   
}
