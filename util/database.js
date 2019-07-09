// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('shoppingNode', 'root', '123456', {
//     dialect:'mysql',
//     host:'localhost'
// });

// module.exports = sequelize;

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {

    MongoClient.connect('mongodb+srv://jason:qw159753@shoppingnodejs-iwyip.gcp.mongodb.net/shop?retryWrites=true&w=majority')
        .then(client => { 
            console.log('Connected!'); 
            _db = client.db();
            callback();
        })
        .catch(err => { 
            console.log(err);
            throw err; 
        });
};

const getDb = () => {
    if (_db) {
        return _db;
    }
    throw 'NO db found!';
};


exports.mongoConnect = mongoConnect;
exports.getDb = getDb;

