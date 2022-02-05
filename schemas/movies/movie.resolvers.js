const db = require("../../db/index");
const ObjectId = require('mongodb').ObjectId;

module.exports.movieResolvers = {
    Query : {
        getMovie: async(_, {title, _id},context) => {
            try {
                const files = await db.get().collection('movies').findOne({ $or: [{_id: ObjectId(_id) }, {title}]});
                return files;
            }
            catch (error) {
                console.log(error);
                return error;
            }
        },
        getMovies: async (parent, {pageSize= 10, id, after}, context, info) => {
            try {
                const files = await db.get().collection('movies').find({}).limit(pageSize).toArray();
                return files;
            }
            catch (error) {
                console.log(error);
                return error;
            }
        }
    }
};
