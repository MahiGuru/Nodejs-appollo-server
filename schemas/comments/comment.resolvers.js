
const db = require("../../db/index");

module.exports.commentResolvers = {
    Query : {
        getComments: async (parent, {pageSize= 10, id, after}, context, info) => {
            try {
                const files = await db.get().collection('comments').find({}).limit(pageSize).toArray();
                console.log(files);
                return files;
                // console.log("FILESSSS ", files);
                // res.render('index', files);
            }
            catch (error) {
                console.log(error);
                return error;
            }
            // return [{_id: 11, name: 'Mahipal'}, {id: 22, name: 'Mahipal2'}, {id: 33, name: 'Mahipal3'}]
        }
    }
};
