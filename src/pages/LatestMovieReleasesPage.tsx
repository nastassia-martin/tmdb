import { useQuery } from "@tanstack/react-query"

import { getLatestMovies } from "../services/themoviedbAPI"
import MoviesGrid from "../components/MoviesGrid"
import ErrorAlert from "../components/ErrorAlert"
import LoadingSpinner from "../components/LoadingSpinner"
import NoDataFound from "../components/NoDataFound"

const LatestMovieReleasesPage = () => {
	const { data, error, isLoading } = useQuery({
		queryKey: ["movies", "latest-movies"],
		queryFn: getLatestMovies,
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
			{data && <MoviesGrid title={"Latest Releases"} data={data} />}
		</>
	)
}

export default LatestMovieReleasesPage
