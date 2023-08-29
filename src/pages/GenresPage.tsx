import GenreList from "../components/GenreList"
import ErrorAlert from "../components/ErrorAlert"
import NoDataFound from "../components/NoDataFound"
import LoadingSpinner from "../components/LoadingSpinner"
import useGenres from "../hooks/useGenres"

const GenresPage = () => {
	const { data, error, isLoading } = useGenres()

	return (
		<>
			{isLoading && <LoadingSpinner />}
			{/* fetch unsuccessful, return error message */}
			{error && (
				<ErrorAlert error={error instanceof Error ? error.message : null} />
			)}
			{/* fetch successful, but no data returned */}
			{data && data?.genres.length === 0 && <NoDataFound />}
			{data && <GenreList data={data} />}
		</>
	)
}

export default GenresPage
