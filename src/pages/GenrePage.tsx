import { useQuery } from "@tanstack/react-query"
import { useParams, useSearchParams } from "react-router-dom"
import Alert from "react-bootstrap/Alert"

import { getGenreById } from "../services/themoviedbAPI"
import MoviesGrid from "../components/MoviesGrid"
import Pagination from "../components/Pagination"
import LoadingSpinner from "../components/LoadingSpinner"
const GenrePage = () => {
	const [searchParams, setSearchParams] = useSearchParams({
		page: "1",
	})
	const page = Number(searchParams.get("page") || 1)
	const { id } = useParams()
	const genreId = Number(id)

	const { data, isError, isLoading } = useQuery({
		queryFn: () => getGenreById(genreId, page),
		queryKey: ["genre", { genre_id: genreId, page: page }],
	})
	//const genres = queryClient.getQueryData("genres")
	return (
		<>
			{isLoading && <LoadingSpinner />}
			{isError && (
				<Alert variant='danger'>Oh no, something bad happened?</Alert>
			)}
			{data && (
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
