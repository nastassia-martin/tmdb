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
			<div className='page'>
				Page {data.page} of {data.total_pages}
			</div>
			<div className='next'>
				<Button
					disabled={page === data.total_pages}
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
