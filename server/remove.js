
module.exports = function(MongoClient, url, id, callback){
    MongoClient.connect(url, {poolSize:10, useNewUrlParser: true}, function(err, client){
        const db = client.db('week9')
        var myquery = {_id: new require('mongodb').ObjectId(id)}
        db.collection("products").deleteOne(myquery, function(err, res){
            if (err) throw err;
            console.log("1 item deleted");
            client.close();
            callback();
        })
    })   
}