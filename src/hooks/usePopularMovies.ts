import { useQuery } from "@tanstack/react-query"
import { getPopularMovies } from "../services/themoviedbAPI"

const usePopularMovies = () => {
	return useQuery({
		queryKey: ["movies", "popular-movies"],
		queryFn: getPopularMovies,
	})
}
export default usePopularMovies
