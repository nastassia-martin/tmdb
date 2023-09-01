import MoviesGrid from "../components/MoviesGrid"
import ErrorAlert from "../components/ErrorAlert"
import LoadingSpinner from "../components/LoadingSpinner"
import NoDataFound from "../components/NoDataFound"
import useLatestMovies from "../hooks/useLatestMovies"
import PreviousPage from "../components/PreviousPage"

const LatestMovieReleasesPage = () => {
	const { data, error, isLoading } = useLatestMovies()

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
			<PreviousPage />
		</>
	)
}

export default LatestMovieReleasesPage
