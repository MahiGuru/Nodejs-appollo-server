var graphql = require('graphql');

module.exports.movieTypeDefs  = `
    type Movie {
        _id: String,
        plot: String,
        genres:String,
        runtime: String,
        cast:String,
        num_mflix_comments: String,
        title: String,
        fullplot: String,
        countries: String,
        released: String,
        directors: String,
        rated: String,
        awards: [Awards],
        lastupdated: String,
        year: String,
        imdb: String,
        type: String,
        tomatoes: String,
        lastUpdated: String
    }
    type Awards {
        wins: String,
        nominations: String,
        text:String
    }
    extend type Query {
        getMovie(_id: String, title: String): Movie,
        getMovies(pageSize: Int, id: Int, after: Int): [Movie]
    }
`;
