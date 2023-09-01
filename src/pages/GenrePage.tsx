import { useParams, useSearchParams } from "react-router-dom"

import MoviesGrid from "../components/MoviesGrid"
import Pagination from "../components/Pagination"
import LoadingSpinner from "../components/LoadingSpinner"
import ErrorAlert from "../components/ErrorAlert"
import NoDataFound from "../components/NoDataFound"
import useGenre from "../hooks/useGenre"
import useGenres from "../hooks/useGenres"
import PreviousPage from "../components/PreviousPage"

const GenrePage = () => {
	const [searchParams, setSearchParams] = useSearchParams({
		page: "1",
	})
	const page = Number(searchParams.get("page") || 1)
	const { id } = useParams()
	const genreId = Number(id)
	const { data: genres } = useGenres()
	const { data, isLoading, error, status } = useGenre(genreId, page)

	// find the genres.id that matches params & pluck out the name
	// if the name doesn't exist then a default is defined.
	const title =
		genres?.genres.find((id) => id.id === genreId)?.name ?? "Browse by genre"

	return (
		<>
			{isLoading && <LoadingSpinner />}
			{/* fetch unsuccessful, return error message */}
			{error && (
				<ErrorAlert error={error instanceof Error ? error.message : null} />
			)}
			{/* fetch successful, but no data returned */}
			{data && data.results.length === 0 && <NoDataFound />}
			{data && data.results.length > 0 && (
				<>
					<MoviesGrid title={title} data={data} />
					<Pagination
						page={data.page}
						data={data}
						onPreviousPage={() => setSearchParams({ page: String(page - 1) })}
						onNextPage={() => setSearchParams({ page: String(page + 1) })}
					/>
				</>
			)}
			{status === ("success" || "error") && <PreviousPage />}
		</>
	)
}

export default GenrePage
