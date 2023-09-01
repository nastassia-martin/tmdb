import MoviesGrid from "../components/MoviesGrid"
import LoadingSpinner from "../components/LoadingSpinner"
import ErrorAlert from "../components/ErrorAlert"
import NoDataFound from "../components/NoDataFound"
import usePopularMovies from "../hooks/usePopularMovies"
import PreviousPage from "../components/PreviousPage"

const PopularMoviesPage = () => {
	const { data, error, isLoading } = usePopularMovies()

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
			<PreviousPage />
		</>
	)
}

export default PopularMoviesPage
