var graphql = require('graphql');

module.exports.userTypeDefs  = `
    type User {
        _id: String,
        name: String,
        email:String,
        password: String
    }
    extend type Query {
        getUser(_id: String, name: String, email: String): User,
        getUsers(_id: String, name: String, email: String, pageSize: Int, after: Int): [User]
    }
`;
