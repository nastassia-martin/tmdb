G:
[x] Explore 10-20 of the latest movies.
[x] Discover 10-20 of the most popular movies.
[x] See 10-20 of the top list of best movies
[x] Browse movies by genre.
[x] Click on film & (i) see detailed info about the film, (ii) see actors in the film
[x] Click on actor & (i) see detailed info about the actor, (ii) see what films the actor has been in
append_to_response=images%2Ccredits

VG:
[] custom hooks
[] similar / related films on a single film
[] search for films & see which films match the query (with pagination) or if no films match the query
[] See last 10 films shown &history should survive between sessions
[] user can choose whether they want to see the popular movies for the day or week

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
