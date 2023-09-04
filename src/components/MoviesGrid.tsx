import React from "react"
import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

import fallback from "../assets/images/popcorn.jpg"
import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card"
import { GenericMovieData, GenericMovieResponse } from "../types/movies.types"
import useLocalStorage from "../hooks/useLocalStorage"

interface IProps {
	data: GenericMovieResponse
	title: string | null
}
const MoviesGrid: React.FC<IProps> = ({ data, title }) => {
	const [localStorageMovies, setLocalStorageMovies] = useLocalStorage<
		GenericMovieData[]
	>("movie", [])

	const handleClick = (clickedMovie: GenericMovieData) => {
		// check if clicked movie already exists in localStorage movies arr
		if (!localStorageMovies.some((movie) => movie.id === clickedMovie.id)) {
			// if it doesn't exists, then take in all prev movies & add this to list
			const updatedMoviesList = [...localStorageMovies, clickedMovie]

			// seperate this out so that you are not directly mutating state
			setLocalStorageMovies(updatedMoviesList)
		}
	}

	const imageURL = "https://image.tmdb.org/t/p/w300"
	return (
		<>
			{title && <h2 className='container'>{title}</h2>}

			<Container className='movies-container'>
				{data.results.map((result) => (
					<Card
						className='movie-card-anchor'
						as={Link}
						to={`/movies/${result.id}`}
						key={result.id}
						onClick={() => handleClick(result)}
					>
						<div className='movie-img-container'>
							{result.poster_path === null ? (
								<Card.Img
									className='movies-fallback-img img-fluid'
									src={fallback}
									alt={result.title}
								/>
							) : (
								<Card.Img
									className=''
									variant='top'
									src={imageURL + result.poster_path}
									alt={result.title}
								/>
							)}
						</div>

						<Card.Body className='movies-card-body-container'>
							<Card.Title className='movies-card-body-title'>
								{result.title}
							</Card.Title>
							<p>
								<span className='movies-card-body-rating'>
									{result.vote_average.toFixed(1)}
									&nbsp;
								</span>
								<span>
									<FontAwesomeIcon icon={faStar} style={{ color: "#ff40ff" }} />
								</span>
								<span className='movies-card-body-year'>
									&nbsp;|&nbsp;{result.release_date.slice(0, 4)}
								</span>
							</p>
						</Card.Body>
					</Card>
				))}
				{/* <PreviousPage /> */}
			</Container>
		</>
	)
}

export default MoviesGrid
