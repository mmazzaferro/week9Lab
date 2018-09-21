module.exports = function(MongoClient, url, id, name, price, description, callback){
    MongoClient.connect(url, {poolSize:10, useNewUrlParser: true}, function(err, client){
        const db = client.db('week9')
        var myquery = {_id: new require('mongodb').ObjectId(id)}
        var newValues = { $set: {name: name, price: price, description: description}};
        db.collection("products").updateOne(myquery, newValues, function(err, res){
            if (err) throw err;
            console.log("1 item updated");
            callback(res);
        })
    })   
}