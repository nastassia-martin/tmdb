import { useQuery } from "@tanstack/react-query"

import { getPopularMovies } from "../services/themoviedbAPI"
import MoviesGrid from "../components/MoviesGrid"
import LoadingSpinner from "../components/LoadingSpinner"
import ErrorAlert from "../components/ErrorAlert"
import NoDataFound from "../components/NoDataFound"

const PopularMoviesPage = () => {
	const { data, error, isLoading } = useQuery({
		queryKey: ["movies", "popular-movies"],
		queryFn: getPopularMovies,
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
			{data && <MoviesGrid title={"Popular Releases"} data={data} />}
		</>
	)
}

export default PopularMoviesPage
