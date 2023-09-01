import React from "react"
import Button from "react-bootstrap/Button"
import { GenericMovieResponse } from "../types/index.types"
interface IProps {
	page: number
	data: GenericMovieResponse
	onPreviousPage: () => void
	onNextPage: () => void
}

const Pagination: React.FC<IProps> = ({
	page,
	data,
	onPreviousPage,
	onNextPage,
}) => {
	return (
		<div className='d-flex justify-content-between align-items-center'>
			<div className='prev'>
				<Button disabled={page <= 1} onClick={onPreviousPage} variant='light'>
					Previous Page
				</Button>
			</div>
			<div className='main-colour'>
				Page {data.page} of {data.total_pages}
			</div>
			<div className='next'>
				<Button
					// api does not fetch beyond page 500,
					// disable if the page is equal to 500 or if it is equal to the total number of pages.
					disabled={page === data.total_pages || page === 500}
					onClick={onNextPage}
					variant='light'
				>
					Next Page
				</Button>
			</div>
		</div>
	)
}

export default Pagination
