
const db = require("../../db/index");

module.exports.commentResolvers = {
    Query : {
        getComments: async (parent, args, context, info) => {
            try {
                const files = await db.get().collection('comments').find({}).toArray();
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
