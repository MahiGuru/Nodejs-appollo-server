const { gql } = require('apollo-server');

// GraphQL schema
module.exports.commentQuery = `
    type Query {
        comments: [Comment]
    }
    type Comment {
        _id: Int
        name: String
        email: String
        movie_id: String
        text: String
        date: String
    }
`;

var getComment = async (args) => {
    return await db.get().collection('comments').find({}).toArray();
}
var getComments = async () => {
    return await db.get().collection('comments').find({}).toArray();
}
module.exports.commentResolvers = {
    Query: {
        comment: getComment,
        comments: getComments
    }
}
