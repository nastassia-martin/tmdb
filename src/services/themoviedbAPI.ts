/**
 * themoviedb service
 *
 * <https://api.themoviedb.org/3>
 *
 */
import axios from "axios"
import { MovieResponse, GenresResponse } from "../types/index.types"

const base_URL = "https://api.themoviedb.org/3"
const ACCESS_TOKEN = import.meta.env.ACCESS_TOKEN
const FAKE_DELAY = 1500

const instance = axios.create({
	baseURL: base_URL,
	headers: {
		accept: "application/json",
		Authorization: "Bearer" + ACCESS_TOKEN,
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
	return get<GenresResponse>(`/genre/movie/list?language=en`)
}

/**
 * Get popular movies
 * params used: page
 * @returns Promise
 */
export const getPopularMovies = () => {
	return get<MovieResponse>(
		`/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=vote_average.desc&vote_count.gte=10000`
	)
}
