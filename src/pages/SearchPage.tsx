import { useState } from "react"
import { useSearchParams } from "react-router-dom"
import MoviesGrid from "../components/MoviesGrid"
import Pagination from "../components/Pagination"
import useSearch from "../hooks/useSearch"
import LoadingSpinner from "../components/LoadingSpinner"
import ErrorAlert from "../components/ErrorAlert"
import SearchForm from "../components/SearchForm"
import NoDataFound from "../components/NoDataFound"

const SearchPage = () => {
	const [searchParams, setSearchParams] = useSearchParams({
		query: "",
		page: "1",
	})
	// query is assigned to query params or ""
	const query = searchParams.get("query") ?? ""
	const page = Number(searchParams.get("page") || 1)
	// if there is no query, the defualt is "", if thre is a query this will persist across forward / back page
	const [searchInput, setSearchInput] = useState(query ?? "")
	const { data, error, isLoading, fetchStatus } = useSearch(query, page)

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		// prevent sumbit if input is faked or empty
		if (!searchInput.trim().length) {
			return
		}
		// set input value as query in searchParams
		setSearchParams({ query: searchInput, page: "1" }) // ?query=barbie
	}
	return (
		<div>
			<>
				<SearchForm
					handleSubmit={handleSubmit}
					handleSetSearchInput={setSearchInput}
					handleSearchInput={searchInput}
				/>
				{/* including fetchStatus for additional safeguading. Without it loading spinner will continually show if there is no query input */}
				{isLoading && fetchStatus === "fetching" && <LoadingSpinner />}
				{error && (
					<ErrorAlert error={error instanceof Error ? error.message : null} />
				)}
				{data && data.results.length > 0 && (
					<>
						<MoviesGrid
							data={data}
							title={`Showing ${data.total_results} results for ${query}...`}
						/>
						<Pagination
							page={data.page}
							data={data}
							onPreviousPage={() =>
								setSearchParams({
									query: searchInput,
									page: String(page - 1),
								})
							}
							onNextPage={() =>
								setSearchParams({
									query: searchInput,
									page: String(page + 1),
								})
							}
						/>
					</>
				)}
				{data && data.results.length === 0 && <NoDataFound />}
			</>
		</div>
	)
}

export default SearchPage
