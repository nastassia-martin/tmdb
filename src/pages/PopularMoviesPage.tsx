//import React from "react"
import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"

import Alert from "react-bootstrap/Alert"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

import * as TMBD_API from "../services/themoviedbAPI"

const PopularMovies = () => {
	const baseURL = "https://image.tmdb.org/t/p"
	const width = "/w342"
	const { data, isError } = useQuery({
		queryKey: ["movies"],
		queryFn: TMBD_API.getPopularMovies,
	})

	return (
		<>
			{isError && (
				<Alert variant='danger'>Oh no, something bad happened?</Alert>
			)}

			<Container className='p-4'>
				<Row className='g-4'>
					{data &&
						data.results.map((res) => (
							<Card
								// as={Link}
								// to={`/movies/${res.id}`}
								key={res.id}
								className='popular-movies'
							>
								<Card.Img
									className='fluid'
									src={baseURL + width + res.backdrop_path}
									alt={res.title}
								/>
								<Card.ImgOverlay>
									<Card.Title>{res.title}</Card.Title>
									<Card.Text>
										vote average: {res.vote_average}, total votes:
										{res.vote_count}
									</Card.Text>
								</Card.ImgOverlay>
							</Card>
						))}
				</Row>
			</Container>
		</>
	)
}

export default PopularMovies
