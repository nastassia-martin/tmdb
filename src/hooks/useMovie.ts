import { useQuery } from "@tanstack/react-query"
import { getMovieByIdRec } from "../services/themoviedbAPI"

const useMovie = (movieId: number) => {
	return useQuery({
		queryFn: () => getMovieByIdRec(movieId),
		queryKey: ["movie", { movie_id: movieId }],
	})
}

export default useMovie
