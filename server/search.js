module.exports = function(MongoClient, url, query, callback){
    MongoClient.connect(url, {poolSize:10, useNewUrlParser: true}, function(err, client){
        const db = client.db('week9')
        db.collection("products").createIndex({"name": "text", "description":"text"}, function(err, _){
            if (err) throw err;
            db.collection("products").find({$text: {$search: query}}).toArray(function(err, result){
            if (err) throw err;
            console.log(result);
            client.close();
            callback(result);
            }) 
        })
        
    })   
}