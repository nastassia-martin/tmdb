import { useQuery } from "@tanstack/react-query"
import { getTopListedMovies } from "../services/themoviedbAPI"

const useTopMovies = () => {
	return useQuery({
		queryKey: ["movies", "top-listed-movies"],
		queryFn: getTopListedMovies,
	})
}
export default useTopMovies
