import React from "react"
import { Link } from "react-router-dom"

import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"

interface IProps {
	data: PersonData
}

import fallback from "../assets/images/popcorn.jpg"
import { PersonData } from "../types/index.types"
import PreviousPage from "./PreviousPage"
const Person: React.FC<IProps> = ({ data }) => {
	const imageURL = "https://image.tmdb.org/t/p/w300"
	return (
		<Container className='p-3 resource-container'>
			<h2>{data.name}</h2>
			<Card className='resource-card-container person mb-2'>
				{data.profile_path === null ? (
					<Card.Img src={fallback} alt={data.name} />
				) : (
					<Card.Img
						className='fluid'
						src={imageURL + data.profile_path}
						alt={data.name}
					/>
				)}
				<Card.Body>
					{data.biography === "" ? (
						<Card.Text>Known for: {data.known_for_department}</Card.Text>
					) : (
						<Card.Text className='resource-card-body'>
							{data.biography}
						</Card.Text>
					)}
					<Card.Body className='resource-card-body-cast'>
						<Card.Text>Also in:</Card.Text>
						{data.credits.cast.map((movie) => (
							<Card.Text
								className='anchor'
								key={movie.id}
								as={Link}
								to={`/movies/${movie.id}`}
							>
								{movie.title}
							</Card.Text>
						))}
					</Card.Body>
				</Card.Body>
			</Card>
			<PreviousPage />
		</Container>
	)
}

export default Person
