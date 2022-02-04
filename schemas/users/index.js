// GraphQL schema
module.exports = `
    type Query {
        comment(id: Int!): Comment
        comments(name: String): [Comment]
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
