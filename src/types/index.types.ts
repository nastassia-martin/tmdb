export type GenericMovieResponse = {
	page: number
	results: GenericMovieData[]
	total_pages: number
	total_results: number
}

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

export type SingleMovieData = GenericMovieResource & {
	budget: number
	genres: Generic[]
	homepage: string
	revenue: number
	runtime: number
	tagline: string
	credits: Credits
}
export type Generic = {
	id: number
	name: string
}

export type Credits = {
	cast: Cast[]
}

export type Cast = {
	adult: boolean
	gender: number
	id: number
	known_for_department: string
	name: string
	//original_name: string
	//popularity: number
	profile_path: string | null
	cast_id: number
	character: string
	credit_id: string
	//order: number
}
