# Nodejs Express framework with Apollo Server


### Comments Query
query CommentsQuery {
  getComments {
    _id,
    name
  } 
}

### Movies Query
query MoviesQuery {
  getMovies {
    _id,
    title,
    released
  }
}

### Movies Query
query MovieQuery($id: String, $title: String) {
  getMovie(_id: $id, title: $title) {
    _id,
    title,
    released
  }
}

### User Query
query UserQuery($pageSize: Int) {
  getUsers(pageSize: $pageSize) {
    _id,
    name,
    email
  }
}
