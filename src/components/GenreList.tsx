import React from "react"
import { Link } from "react-router-dom"

import Container from "react-bootstrap/Container"
import ListGroup from "react-bootstrap/ListGroup"
import { GenresData } from "../types/genres.types"
import PreviousPage from "./PreviousPage"

interface IProps {
	data: GenresData
}
const GenreList: React.FC<IProps> = ({ data }) => {
	return (
		<Container className='p-3 resource-container'>
			<h2>Browse by genre</h2>
			<ListGroup className='p-3	container resource-card-body-cast'>
				{data.genres.map((genre) => (
					<ListGroup.Item
						key={genre.id}
						as={Link}
						to={`/genres/${genre.id}`}
						className='anchor'
					>
						{genre.name}
					</ListGroup.Item>
				))}
			</ListGroup>
			<PreviousPage />
		</Container>
	)
}

export default GenreList
