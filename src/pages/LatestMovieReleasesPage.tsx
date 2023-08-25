import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"

import Alert from "react-bootstrap/Alert"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

import { getLatestMovies } from "../services/themoviedbAPI"
import fallback from "../assets/images/popcorn.jpg"

const LatestMovieReleasesPage = () => {
	const imageURL = "https://image.tmdb.org/t/p"
	const width = "/w342"

	const { data, isError } = useQuery({
		queryKey: ["latest-movies"],
		queryFn: getLatestMovies,
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
								as={Link}
								to={`/movies/${res.id}`}
								key={res.id}
								className='movies'
							>
								{res.backdrop_path === null ? (
									<Card.Img className='fluid' src={fallback} alt={res.title} />
								) : (
									<Card.Img
										className='fluid'
										src={imageURL + width + res.backdrop_path}
										alt={res.title}
									/>
								)}

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

export default LatestMovieReleasesPage
