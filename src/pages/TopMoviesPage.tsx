import MoviesGrid from "../components/MoviesGrid"
import LoadingSpinner from "../components/LoadingSpinner"
import ErrorAlert from "../components/ErrorAlert"
import NoDataFound from "../components/NoDataFound"
import useTopMovies from "../hooks/useTopMovies"
import PreviousPage from "../components/PreviousPage"

const TopMoviesPage = () => {
	const { data, isLoading, error } = useTopMovies()

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
			<PreviousPage />
		</>
	)
}

export default TopMoviesPage
