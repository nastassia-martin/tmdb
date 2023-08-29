import { useParams } from "react-router-dom"
import Movie from "../components/Movie"
import ErrorAlert from "../components/ErrorAlert"
import LoadingSpinner from "../components/LoadingSpinner"
import useMovie from "../hooks/useMovie"

const MoviePage = () => {
	const { id } = useParams()
	const movieId = Number(id)

	const { data, error, isLoading } = useMovie(movieId)
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
