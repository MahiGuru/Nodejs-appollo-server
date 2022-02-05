// Type Definations
const { commentTypeDefs } = require('./comments/comment.typeDefs.js');
const { movieTypeDefs } = require('./movies/movie.typeDefs.js');
const { userTypeDefs } = require('./users/user.typeDefs');

// Resolvers
const { commentResolvers } = require('./comments/comment.resolvers.js');
const { movieResolvers } = require('./movies/movie.resolvers.js');
const { userResolvers } = require('./users/user.resolvers.js');

const { makeExecutableSchema } = require('@graphql-tools/schema');

const Query = `
    type Query {
        _empty: String
    }
`

const resolvers = {
    Query : Object.assign({}, commentResolvers.Query, movieResolvers.Query, userResolvers.Query)
}

module.exports.schema = makeExecutableSchema({
    typeDefs : [Query, commentTypeDefs, movieTypeDefs, userTypeDefs],
    resolvers
})
