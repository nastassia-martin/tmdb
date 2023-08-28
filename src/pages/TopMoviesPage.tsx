import { useQuery } from "@tanstack/react-query"
import Alert from "react-bootstrap/Alert"

import { getTopListedMovies } from "../services/themoviedbAPI"
import MoviesGrid from "../components/MoviesGrid"

const TopMoviesPage = () => {
	const { data, isError } = useQuery({
		queryKey: ["movies", "top-listed-movies"],
		queryFn: getTopListedMovies,
	})

	return (
		<>
			{isError && (
				<Alert variant='danger'>Oh no, something bad happened?</Alert>
			)}

			{data && <MoviesGrid title={"Top Movies"} data={data} />}
		</>
	)
}

export default TopMoviesPage
