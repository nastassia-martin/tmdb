import { useQuery } from "@tanstack/react-query"
import { useParams, Link } from "react-router-dom"

// import Alert from "react-bootstrap/Alert"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
// import Row from "react-bootstrap/Row"

import { getPersonById } from "../services/themoviedbAPI"
import fallback from "../assets/images/popcorn.jpg"

const PersonPage = () => {
	const { id } = useParams()
	const personId = Number(id)
	const imageURL = "https://image.tmdb.org/t/p"
	const width = "/w342"

	const { data } = useQuery({
		queryFn: () => getPersonById(personId),
		queryKey: ["person", { person_id: personId }],
	})

	return (
		<Container>
			{data && (
				<Card>
					<Card.Title>{data.name}</Card.Title>
					{data.profile_path === null ? (
						<Card.Img className='fluid' src={fallback} alt={data.name} />
					) : (
						<Card.Img
							className='fluid'
							src={imageURL + width + data.profile_path}
							alt={data.name}
						/>
					)}
					{data.biography === "" ? (
						<Card.Text>Known for: {data.known_for_department}</Card.Text>
					) : (
						<Card.Text>biography{data.biography}</Card.Text>
					)}

					<Card.Text>Also in:</Card.Text>
					{data.credits.cast.map((movie) => (
						<Card.Text key={movie.id} as={Link} to={`/movies/${movie.id}`}>
							{movie.title}
						</Card.Text>
					))}
				</Card>
			)}
		</Container>
	)
}

export default PersonPage
