import { useQuery } from "@tanstack/react-query"

import { useParams, Link, useSearchParams } from "react-router-dom"

import Alert from "react-bootstrap/Alert"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import fallback from "../assets/images/popcorn.jpg"

import { getGenreById } from "../services/themoviedbAPI"
const GenrePage = () => {
	const [searchParams, setSearchParams] = useSearchParams({
		page: "1",
	})
	// get "page=" or default value of 1
	const page = Number(searchParams.get("page") || 1)
	const { id } = useParams()
	const genreId = Number(id)

	const imageURL = "https://image.tmdb.org/t/p"
	const width = "/w342"

	const { data, isError } = useQuery({
		queryFn: () => getGenreById(genreId, page),
		queryKey: ["genre", { genre_id: genreId, page: page }],
	})
	//const genres = queryClient.getQueryData("genres")
	return (
		<>
			{isError && (
				<Alert variant='danger'>Oh no, something bad happened?</Alert>
			)}
			{data && (
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
										<Card.Img
											className='fluid'
											src={fallback}
											alt={res.title}
										/>
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
					<div className='d-flex justify-content-between align-items-center'>
						<div className='prev'>
							<Button
								disabled={page <= 1} // IF PAGE IS ON THE FIRST PAGE YOU CANT GO BACK
								onClick={() => setSearchParams({ page: String(page - 1) })} //GO BACK BY 1 PAGE
								variant='light'
							>
								Previous Page
							</Button>
						</div>
						<div className='page'>
							Page {data.page} of {data.total_pages}
						</div>
						<div className='next'>
							<Button
								disabled={page === data.total_pages} //IF PAGE IS ON THE LAST PAGE YOU CANT GO BACK
								onClick={() => setSearchParams({ page: String(page + 1) })} //GO forward BY 1 PAGE
								variant='light'
							>
								Next Page
							</Button>
						</div>
					</div>
				</Container>
			)}
		</>
	)
}

export default GenrePage
