import React from "react"
import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import fallback from "../assets/images/popcorn.jpg"
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"

import { SingleMovieData } from "../types/index.types"
import PreviousPage from "./PreviousPage"

interface IProps {
	data: SingleMovieData
}
const Movie: React.FC<IProps> = ({ data }) => {
	const imageURL = "https://image.tmdb.org/t/p/w300"
	return (
		<Container className='p-3 movie-container'>
			<h2>{data.title}</h2>
			<Card className='movie-card-container mb-2'>
				{data.poster_path === null ? (
					<Card.Img className='fluid' src={fallback} alt={data.title} />
				) : (
					<Card.Img
						className='fluid'
						src={imageURL + data.poster_path}
						alt={data.title}
					/>
				)}
				<Card.Body>
					<Card.Text className='movie-card-body'>{data.overview}</Card.Text>

					<Card.Body className='movie-card-body-cast'>
						Starring:
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

					<Card.Text className='movie-card-body'>
						Runtime: {data.runtime} minutes
					</Card.Text>
					<Card.Text className='movie-card-body'>
						Communnity rating:&nbsp;{data.vote_average.toFixed(1)}&nbsp;
						<span>
							<FontAwesomeIcon icon={faStar} style={{ color: "#ff40ff" }} />
						</span>
					</Card.Text>
					{data.genres.map((genre) => (
						<Card.Text
							className='movie-card-body'
							key={genre.id}
							// as={Link}
							// to={`/genre/${genre.id`}
						>
							{genre.name}
						</Card.Text>
					))}
				</Card.Body>
			</Card>
			<PreviousPage />
		</Container>
	)
}

export default Movie
