import { MovieCredits } from "./movies.types"

export type PersonData = {
	adult: boolean
	biography: string
	birthday: string
	deathday: string | null
	gender: number
	homepage: string | null
	id: number
	known_for_department: string
	name: string
	place_of_birth: string
	popularity: number
	profile_path: string | null
	credits: MovieCredits
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
	profile_path: string | null
	cast_id: number
	character: string
	credit_id: string
}
