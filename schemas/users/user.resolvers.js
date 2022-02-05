const db = require("../../db/index");
const ObjectId = require('mongodb').ObjectId;

module.exports.userResolvers = {
    Query : {
        getUser: async(_, {name, email, _id},context) => {
            try {
                const files = await db.get().collection('users').findOne({ $or: [{_id: ObjectId(_id) }, {name}]});
                return files;
            }
            catch (error) {
                console.log(error);
                return error;
            }
        },
        getUsers: async (parent, {name, email, _id, pageSize= 10, after}, context, info) => {
            try {
                const files = await db.get().collection('users').find({}).limit(pageSize).toArray();
                return files;
            }
            catch (error) {
                console.log(error);
                return error;
            }
        }
    }
};
