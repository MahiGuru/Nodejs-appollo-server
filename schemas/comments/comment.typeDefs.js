module.exports.commentTypeDefs = `
    type Comment {
        _id: String
        name: String
        email: String
        movie_id: String
        text: String
        date: String
    }
    extend type Query {
        getComments: [Comment]
    }
`;
