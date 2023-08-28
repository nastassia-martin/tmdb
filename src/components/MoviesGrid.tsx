import React from "react"
import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

import fallback from "../assets/images/popcorn.jpg"
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import { GenericMovieResponse } from "../types/index.types"

import PreviousPage from "./PreviousPage"

interface IProps {
	data: GenericMovieResponse
	title: string
}
const MoviesGrid: React.FC<IProps> = ({ data, title }) => {
	const imageURL = "https://image.tmdb.org/t/p/w300"
	return (
		<>
			<h2 className='container'>{title}</h2>
			<Container className='movies-container'>
				{data.results.map((result) => (
					<Card as={Link} to={`/movies/${result.id}`} key={result.id}>
						{result.backdrop_path === null ? (
							<Card.Img
								className='movies-fallback-img'
								src={fallback}
								alt={result.title}
							/>
						) : (
							<Card.Img
								variant='top'
								src={imageURL + result.backdrop_path}
								alt={result.title}
							/>
						)}
						<Card.Body className='movies-card-body-container'>
							<Card.Title className='movies-card-body-title'>
								{result.title}
							</Card.Title>
							<span className='movies-card-body-rating'>
								Communnity rating:&nbsp;{result.vote_average}
								&nbsp;
							</span>
							<span>
								<FontAwesomeIcon icon={faStar} style={{ color: "#ff40ff" }} />
							</span>
							<Card.Text className='text-truncate'>{result.overview}</Card.Text>
						</Card.Body>
					</Card>
				))}
				<PreviousPage />
			</Container>
		</>
	)
}

export default MoviesGrid
