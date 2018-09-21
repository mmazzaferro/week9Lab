module.exports = function(MongoClient, url, callback){
    MongoClient.connect(url, {poolSize:10, useNewUrlParser: true}, function(err, client){
        const db = client.db('week9')
        db.collection("products").find().toArray(function(err, result){
            if (err) throw err;
            console.log(result);
            client.close();
            callback(result);
        }) 
    })   
}


