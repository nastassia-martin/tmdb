import { useQuery } from "@tanstack/react-query"
import { getLatestMovies } from "../services/themoviedbAPI"

const useLatestMovies = () => {
	return useQuery({
		queryKey: ["movies", "latest-movies"],
		queryFn: getLatestMovies,
	})
}
export default useLatestMovies
