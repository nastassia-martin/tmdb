import { Generic } from "./generics.types"
import { Credits } from "./person.types"

export type GenericMovieResource = {
	adult: boolean
	backdrop_path: string | null
	id: number
	original_language: string
	original_title: string
	overview: string
	popularity: number
	poster_path: string | null
	release_date: string
	title: string
	vote_average: number
	vote_count: number
}
export type GenericMovieData = GenericMovieResource & {
	genre_ids: number[]
}
export type GenericMovieResponse = {
	page: number
	results: GenericMovieData[]
	total_pages: number
	total_results: number
}
export type SingleMovieData = GenericMovieResource & {
	budget: number
	genres: Generic[]
	homepage: string
	revenue: number
	runtime: number
	tagline: string
	credits: Credits
	recommendations: GenericMovieResponse
}

export type MovieCredits = {
	cast: GenericMovieResource[]
}
