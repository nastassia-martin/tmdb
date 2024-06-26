import React from "react"
import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import fallback from "../assets/images/popcorn.jpg"
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"

import { SingleMovieData } from "../types/movies.types"

interface IProps {
	data: SingleMovieData
}
const Movie: React.FC<IProps> = ({ data }) => {
	const imageURL = "https://image.tmdb.org/t/p/w300"
	return (
		<Container className='p-3 resource-container'>
			<h2>{data.title}</h2>
			<Card className='resource-card-container mb-2'>
				{data.poster_path === null ? (
					<Card.Img className='img-fluid' src={fallback} alt={data.title} />
				) : (
					<Card.Img
						className='img-fluid'
						src={imageURL + data.poster_path}
						alt={data.title}
					/>
				)}
				<Card.Body className='resource-main-card-body'>
					<Card.Text className='resource-card-body'>{data.overview}</Card.Text>

					<Card.Body className='resource-card-body-cast'>
						<Card.Text>Starring:</Card.Text>
						{data.credits.cast.slice(0, 5).map((actor) => (
							<Card.Text
								className='anchor'
								key={actor.id}
								as={Link}
								to={`/people/${actor.id}`}
							>
								{actor.name}
							</Card.Text>
						))}
					</Card.Body>
					<Card.Body className='resource-card-body-stats'>
						<Card.Text className='resource-card-body-list'>
							Runtime: {data.runtime} minutes &nbsp;|
						</Card.Text>
						<Card.Text className='resource-card-body'>
							&nbsp;{data.vote_average.toFixed(1)}&nbsp;
							<span>
								<FontAwesomeIcon icon={faStar} style={{ color: "#ff40ff" }} />
							</span>
						</Card.Text>
					</Card.Body>
					<Card.Body className='resource-card-body-stats'>
						{data.genres.map((genre) => (
							<Card.Text className='resource-card-body' key={genre.id}>
								{genre.name}
							</Card.Text>
						))}
					</Card.Body>
				</Card.Body>
			</Card>
		</Container>
	)
}

export default Movie
