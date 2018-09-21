//export function drop(db);
module.exports = { drop:function(dbo){
    dbo.collection("products").drop(function(err, delOK){
        if (err) throw err;
        if (delOK) console.log("Collection deleted");
    });
}
}