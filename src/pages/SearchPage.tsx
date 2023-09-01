import { useState } from "react"

import Alert from "react-bootstrap/Alert"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"
import { useSearchParams } from "react-router-dom"
import MoviesGrid from "../components/MoviesGrid"
import Pagination from "../components/Pagination"
import useSearch from "../hooks/useSearch"

const SearchPage = () => {
	const [searchParams, setSearchParams] = useSearchParams({
		query: "",
		page: "1",
	})
	const query = searchParams.get("query") ?? ""
	const page = Number(searchParams.get("page") || 1)
	const [searchInput, setSearchInput] = useState(query ?? "")

	const { data, isError, isLoading } = useSearch(query, page)
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()

		// haxx0r
		if (!searchInput.trim().length) {
			return
		}

		// set input value as query in searchParams
		setSearchParams({ query: searchInput, page: "1" }) // ?query=barbie
	}
	return (
		<div>
			<>
				<Form className='mb-4' onSubmit={handleSubmit}>
					<Form.Group className='mb-3' controlId='searchQuery'>
						<Form.Label>Search Query</Form.Label>
						<Form.Control
							onChange={(e) => setSearchInput(e.target.value)}
							placeholder='Enter your search query'
							required
							type='text'
							value={searchInput}
						/>
					</Form.Group>

					<div className='d-flex justify-content-end'>
						<Button
							variant='success'
							type='submit'
							disabled={!searchInput.trim().length}
						>
							Search
						</Button>
					</div>
				</Form>
				{isError && (
					<Alert variant='warning'>Ooops, something went wrong!</Alert>
				)}
				{data && (
					<div id='search-result'>
						<p>
							Showing {data.total_results} search results for "{query}"...
						</p>

						<MoviesGrid
							data={data}
							title={`Showing ${data.total_results}${" "}
							search results for ${query}...`}
						/>
					</div>
				)}
				{data && (
					<Pagination
						page={data.page}
						data={data}
						onPreviousPage={() =>
							setSearchParams({ query: searchInput, page: String(page - 1) })
						}
						onNextPage={() =>
							setSearchParams({ query: searchInput, page: String(page + 1) })
						}
					/>
				)}
			</>
		</div>
	)
}

export default SearchPage
