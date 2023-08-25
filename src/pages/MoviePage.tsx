import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"

// import Alert from "react-bootstrap/Alert"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
// import Row from "react-bootstrap/Row"

import { getMovieById } from "../services/themoviedbAPI"
import fallback from "../assets/images/popcorn.jpg"

const MoviePage = () => {
	const { id } = useParams()
	const movieId = Number(id)
	const imageURL = "https://image.tmdb.org/t/p"
	const width = "/w342"

	const { data } = useQuery({
		queryFn: () => getMovieById(movieId),
		queryKey: ["movie", { movie_id: movieId }],
	})
	return (
		<Container>
			{data && (
				<Card>
					<Card.Title>{data.title}</Card.Title>
					{data.poster_path === null ? (
						<Card.Img className='fluid' src={fallback} alt={data.title} />
					) : (
						<Card.Img
							className='fluid'
							src={imageURL + width + data.poster_path}
							alt={data.title}
						/>
					)}
					<Card.Body>
						<Card.Text>{data.overview}</Card.Text>
						{data.credits.cast.slice(0, 5).map((actor) => (
							<Card.Text key={actor.id}>{actor.name}</Card.Text>
						))}
						<Card.Text>{data.runtime} minutes</Card.Text>
						<Card.Text>{data.vote_average.toFixed(1)} stars</Card.Text>
					</Card.Body>
				</Card>
			)}
		</Container>
	)
}

export default MoviePage
