import { useQuery } from "@tanstack/react-query"
import { getMovieById } from "../services/themoviedbAPI"

const useMovie = (movieId: number) => {
	return useQuery({
		queryFn: () => getMovieById(movieId),
		queryKey: ["movie", { movie_id: movieId }],
	})
}

export default useMovie
