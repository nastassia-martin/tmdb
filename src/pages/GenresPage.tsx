import { useQuery } from "@tanstack/react-query"
import { Link } from "react-router-dom"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

import { getAllGenres } from "../services/themoviedbAPI"
import { ListGroup } from "react-bootstrap"
const GenresPage = () => {
	const { data, isError } = useQuery({
		queryKey: ["genres"],
		queryFn: getAllGenres,
	})
	console.log()
	return (
		<Container>
			{data && (
				<ListGroup>
					{data.genres.map((genre) => (
						<ListGroup.Item key={genre.id} as={Link} to={`/genres/${genre.id}`}>
							{genre.name}
						</ListGroup.Item>
					))}
				</ListGroup>
			)}
		</Container>
	)
}

export default GenresPage
