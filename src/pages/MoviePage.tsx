import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"

import { getMovieById } from "../services/themoviedbAPI"
import Movie from "../components/Movie"
import ErrorAlert from "../components/ErrorAlert"
import LoadingSpinner from "../components/LoadingSpinner"

const MoviePage = () => {
	const { id } = useParams()
	const movieId = Number(id)

	const { data, error, isLoading } = useQuery({
		queryFn: () => getMovieById(movieId),
		queryKey: ["movie", { movie_id: movieId }],
	})
	return (
		<>
			{isLoading && <LoadingSpinner />}
			{/* fetch unsuccessful, return error message */}
			{error && (
				<ErrorAlert error={error instanceof Error ? error.message : null} />
			)}
			{data && <Movie data={data} />}
		</>
	)
}

export default MoviePage
