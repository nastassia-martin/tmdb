import { useQuery } from "@tanstack/react-query"
import Alert from "react-bootstrap/Alert"

import { getPopularMovies } from "../services/themoviedbAPI"
import MoviesGrid from "../components/MoviesGrid"

const PopularMoviesPage = () => {
	const { data, isError } = useQuery({
		queryKey: ["movies", "popular-movies"],
		queryFn: getPopularMovies,
	})
	return (
		<>
			{isError && (
				<Alert variant='danger'>Oh no, something bad happened?</Alert>
			)}

			{data && <MoviesGrid data={data} />}
		</>
	)
}

export default PopularMoviesPage
