import React from "react"
import Button from "react-bootstrap/Button"
import Form from "react-bootstrap/Form"

interface IProps {
	handleSubmit: (e: React.FormEvent) => void
	handleSetSearchInput: (value: string) => void
	handleSearchInput: string
}
const SearchForm: React.FC<IProps> = ({
	handleSubmit,
	handleSearchInput,
	handleSetSearchInput,
}) => {
	return (
		<Form className='mb-4 container' onSubmit={handleSubmit}>
			<Form.Group className='mb-3' controlId='searchQuery'>
				<Form.Label>Search Query</Form.Label>
				<Form.Control
					onChange={(e) => handleSetSearchInput(e.target.value)}
					placeholder='Enter your search query'
					required
					type='text'
					value={handleSearchInput}
				/>
			</Form.Group>

			<div className='d-flex justify-content-end'>
				<Button
					className='form-button'
					type='submit'
					disabled={!handleSearchInput.trim().length}
				>
					Search
				</Button>
			</div>
		</Form>
	)
}

export default SearchForm
