//export function create(db);
module.exports = { create:function(dbo, callback){
     dbo.createCollection("products", function(err, res){
        if (err) throw err;
        console.log("Collection created!");
        callback(res);
    })

}
};