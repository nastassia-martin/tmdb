/**
 * themoviedb service
 *
 * <https://api.themoviedb.org/3>
 *
 */
import axios from "axios"
import { GenresData } from "../types/genres.types"
import { GenericMovieResponse, SingleMovieData } from "../types/movies.types"
import { PersonData } from "../types/person.types"

const BASE_URL = "https://api.themoviedb.org/3"
const VITE_APP_ACCESS_TOKEN = import.meta.env.VITE_APP_ACCESS_TOKEN

const instance = axios.create({
	baseURL: BASE_URL,
	headers: {
		accept: "application/json",
		Authorization: "Bearer " + VITE_APP_ACCESS_TOKEN,
	},
})

/**
 * Execute a HTTP GET request to an endpoint.
 *
 * @param {string} endpoint Endpoint to HTTP GET
 * @returns Promise
 */

const get = async <T>(endpoint: string) => {
	const response = await instance.get<T>(endpoint)

	return response.data
}

/**
 * Get all genres
 */

export const getAllGenres = () => {
	return get<GenresData>(`/genre/movie/list?language=en`)
}
/**
 * Get movies of one genre
 * @param genre_id genre id
 * @param page number of search
 */
export const getGenreById = (genre_id: number, page: number) => {
	return get<GenericMovieResponse>(
		`discover/movie?include_adult=false&include_video=false&language=en-US
		&page=${page}&sort_by=popularity.desc&with_genres=${genre_id}`
	)
}

/**
 * Get Top Rated movies
 */
export const getTopListedMovies = () => {
	return get<GenericMovieResponse>(
		`/movie/top_rated?include_adult=false?language=en-US&page=1`
	)
}
/**
 * Get Latest movies
 * @returns Promise
 */
export const getLatestMovies = () => {
	return get<GenericMovieResponse>(
		`movie/now_playing?include_adult=false?language=en-US&page=1`
	)
}
/**
 * Get popular movies
 * @returns Promise
 */
export const getPopularMovies = () => {
	return get<GenericMovieResponse>(
		`/movie/popular?include_adult=false?language=en-US&page=1`
	)
}
/**
 * Get a single movie with credits & recommendatons appended to result
 * @param movie_id
 */
export const getMovieByIdRec = (movie_id: number) => {
	return get<SingleMovieData>(`
	/movie/${movie_id}?append_to_response=credits,recommendations&language=en-US`)
}

/**
 * Get a single person with movies appended to result
 * @param person_id
 */
export const getPersonById = (person_id: number) => {
	return get<PersonData>(`
	/person/${person_id}?append_to_response=credits&language=en-US`)
}
/**
 * Get trending movies
 * @param time_window search trending by day or week
 */
export const getTrendingMovies = (time_window: string) => {
	return get<GenericMovieResponse>(`
	/trending/movie/${time_window}?language=en-US`)
}
/**
 * Search for a movie by keyword
 * @param query search to use
 * @param page Page number of result
 */
export const searchMovie = (query: string, page = 1) => {
	return get<GenericMovieResponse>(
		`search/movie?query=${query}&include_adult=false&language=en-US&page=${page}`
	)
}
