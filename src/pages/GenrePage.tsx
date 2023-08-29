import { useParams, useSearchParams } from "react-router-dom"

import MoviesGrid from "../components/MoviesGrid"
import Pagination from "../components/Pagination"
import LoadingSpinner from "../components/LoadingSpinner"
import ErrorAlert from "../components/ErrorAlert"
import NoDataFound from "../components/NoDataFound"
import useGenre from "../hooks/useGenre"

const GenrePage = () => {
	const [searchParams, setSearchParams] = useSearchParams({
		page: "1",
	})
	const page = Number(searchParams.get("page") || 1)
	const { id } = useParams()
	const genreId = Number(id)

	const { data, isLoading, error } = useGenre(genreId, page)

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
					<MoviesGrid title={"Genre"} data={data} />
					<Pagination
						page={data.page}
						data={data}
						onPreviousPage={() => setSearchParams({ page: String(page - 1) })}
						onNextPage={() => setSearchParams({ page: String(page + 1) })}
					/>
				</>
			)}
		</>
	)
}

export default GenrePage
