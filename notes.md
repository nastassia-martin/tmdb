Minimum:
[x]Explore 10-20 of the latest movies.
[]Discover the most popular movies.
[x]See the top list of best movies
Browse movies by genre.
[]Dive deep into each movie's details.
Get to know the stars of the film. -> person/id/?append_to_response=images%2Ccredits

# Routes

## partial/Nav

## page/HomePage:

- search bar (generes) NOT NEEDED
- browse based on genre => GenresPage
  Clickable list of:
- latest releases (grid)
- most popular films (grid)
- top-listed films in US (grid)

## page/GenresPage:

Clickable list of:

- genres
- search bar too? so user can enter the genre & ON SUCCESS navigate to the genre

## page/GenrePage:

- title {genre}
- list of {movies}
- pagination

## page/MoviePage:

- detailed information about the movie
- find out who were the actors in the film

## page/ActorPage:

- detailed information about the actor
- find out which films he has appeared in

Components:

- pagination
- back button

Requests:
// SORT BY POPULARITY

- genres ["genres"]
- genre & sort by = popularity queryKey = ["genre", { genreId: genreId }]
- actors ["actors"]
- actor & sort by = popularity queryKey = ["actor", { actorId: actorId}]
- movies ["movies"]
- movie & sort by: popular queryKey = ["film", { filmId: filmId}]

\***\*\*\*\*\*\***GET RID OF FAKE DELAY BEFORE DEPLOYMENT!!!!!!**\*\***\***\*\***
