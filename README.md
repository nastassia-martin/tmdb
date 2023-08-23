# Specification

## G:

All queries after movies must (where the API's endpoint supports this) contain the `include_adult=false` flag.

In all places where a film or actor is shown, either the poster of the film or the profile picture of the actor must be shown (this can be found in the answers you get from TMDB).

The browser's back/forward buttons should work to navigate the page. It should also be possible to reload the page and then return to the same view as before reloading!

As a visitor, I will:

- be able to see which are the 10-20 latest movies.
- be able to see which are the 10-20 most popular movies.
- be able to see which are the 10-20 most top-rated films.
- be able to browse for movies (with pagination) based on genre (you should be able to see the title of the genre).

As a visitor, I will also:

- be able to click on a movie and get detailed information about the movie.
- be able to click on a film and find out who were the actors in the film.
- be able to click on an actor and get detailed information about the actor.
- be able to click on an actor and find out which films he has appeared in.

pagination is required only on the browsing of movies based on genre. Should you implement it anyway on latest/popular/top-listed films, it is of course a plus.

The pagination must survive a page reload!

## VG

You use Custom Hooks in appropriate places.

The visitor must be able to see related/similar films on a single film.

The visitor should be able to search for movies and see which movies (with pagination) match the search query, or if no movies match my search query. Both search query and pagination must be maintained when reloading the page.

See the last 10 films you have shown. History should survive between sessions.

The visitor should be able to choose whether he wants to see popular movies for the day or for the week (to be maintained when reloading the page).
