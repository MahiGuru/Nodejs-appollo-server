const { MongoClient } = require("mongodb");
const mongoDbUrl = 'mongodb+srv://admin:admin@cluster0.wntrn.mongodb.net/sample_mflix?retryWrites=true&w=majority';
let mongodb;

function connect(callback){
    MongoClient.connect(mongoDbUrl, (err, client) => {
        // console.log("DBBB ", db);
        // client.db('sample_airbnb')
        mongodb = client.db();
        callback();
    });
}
function get(){
    return mongodb;
}

function close(){
    mongodb.close();
}

module.exports = {
    connect,
    get,
    close
};
