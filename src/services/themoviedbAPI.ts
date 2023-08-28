/**
 * themoviedb service
 *
 * <https://api.themoviedb.org/3>
 *
 */
import axios from "axios"
import {
	GenericMovieResponse,
	SingleMovieData,
	PersonData,
	GenresData,
} from "../types/index.types"

const BASE_URL = "https://api.themoviedb.org/3"
const VITE_APP_ACCESS_TOKEN = import.meta.env.VITE_APP_ACCESS_TOKEN
const FAKE_DELAY = 1500

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

	//Simulate a delay
	!!FAKE_DELAY && (await new Promise((r) => setTimeout(r, FAKE_DELAY)))

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
 */
export const getGenreById = (genre_id: number, page: number) => {
	return get<GenericMovieResponse>(
		`discover/movie?include_adult=false&include_video=false&language=en-US
		&page=${page}&sort_by=popularity.desc&with_genres=${genre_id}`
	)
}

/**
 * Get Top Listed movies
 * params used: page, sort_by,
 * @returns Promise
 */
export const getTopListedMovies = () => {
	return get<GenericMovieResponse>(
		`/discover/movie?include_adult=false&include_video=false&language=en-US&page=1
		&sort_by=vote_average.desc&vote_count.gte=10000`
	)
}
/**
 * Get Latest movies
 * @returns Promise
 */
export const getLatestMovies = () => {
	return get<GenericMovieResponse>(
		`https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`
	)
}
/**
 * Get popular movies
 * params used: page, sort_by,
 * @returns Promise
 */
export const getPopularMovies = () => {
	return get<GenericMovieResponse>(
		`/discover/movie?include_adult=false&include_video=false&language=en-US&page=1
		&sort_by=popularity.desc`
	)
}
/**
 * Get a single movie with credits appended to result
 * @param movie_id
 */
export const getMovieById = (movie_id: number) => {
	return get<SingleMovieData>(`
	/movie/${movie_id}?append_to_response=credits&language=en-US`)
}
/**
 * Get a single peroson with movies appended to result
 * @param person_id
 */
export const getPersonById = (person_id: number) => {
	return get<PersonData>(`
	/person/${person_id}?append_to_response=credits&language=en-US`)
}
/**
 * @todo: 1 set up req to ´´, movie_id, credits, images,
 * @todo: VG set up req to ´´ recommendations
 * @todo: movie res type
 * Get popular movies
 * params used: page, movie_id,
 * append_to_response: credits, images
 * @returns Promise
 */
// }
