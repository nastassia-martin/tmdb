import { useQuery } from "@tanstack/react-query"

import { getTopListedMovies } from "../services/themoviedbAPI"
import MoviesGrid from "../components/MoviesGrid"
import LoadingSpinner from "../components/LoadingSpinner"
import ErrorAlert from "../components/ErrorAlert"
import NoDataFound from "../components/NoDataFound"

const TopMoviesPage = () => {
	const { data, isLoading, error } = useQuery({
		queryKey: ["movies", "top-listed-movies"],
		queryFn: getTopListedMovies,
	})

	return (
		<>
			{isLoading && <LoadingSpinner />}
			{/* fetch unsuccessful, return error message */}
			{error && (
				<ErrorAlert error={error instanceof Error ? error.message : null} />
			)}
			{/* fetch successful, but no data returned */}
			{data && data.results.length === 0 && <NoDataFound />}
			{data && <MoviesGrid title={"Top Movies"} data={data} />}
		</>
	)
}

export default TopMoviesPage
