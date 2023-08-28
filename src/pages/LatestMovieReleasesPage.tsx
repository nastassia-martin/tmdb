import { useQuery } from "@tanstack/react-query"
import Alert from "react-bootstrap/Alert"

import { getLatestMovies } from "../services/themoviedbAPI"
import MoviesGrid from "../components/MoviesGrid"

const LatestMovieReleasesPage = () => {
	const { data, isError } = useQuery({
		queryKey: ["movies", "latest-movies"],
		queryFn: getLatestMovies,
	})
	return (
		<>
			{isError && (
				<Alert variant='danger'>Oh no, something bad happened?</Alert>
			)}

			{data && <MoviesGrid title={"Latest Releases"} data={data} />}
		</>
	)
}

export default LatestMovieReleasesPage
