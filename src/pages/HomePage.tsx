import { useState } from "react"
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import { Link } from "react-router-dom"
import useTrending from "../hooks/useTrending"
import MoviesGrid from "../components/MoviesGrid"
import LoadingSpinner from "../components/LoadingSpinner"
import ErrorAlert from "../components/ErrorAlert"

const HomePage = () => {
	const [timeWindow, setTimeWindow] = useState("week")
	const { data, error, isLoading } = useTrending(timeWindow)

	return (
		<>
			{error && (
				<ErrorAlert error={error instanceof Error ? error.message : null} />
			)}
			<Container>
				<h1>CODE HUNTER 2023</h1>
				<Container className='home-container'>
					<Card className='home-card-anchor' as={Link} to={"/genres"}>
						<Card.Body>
							<Card.Title>Genres</Card.Title>
							<Card.Text>Deep dive into your favourite genres</Card.Text>
							{/* <Link to={"/genres"}>
									<Button className='pink' variant='dark'>
										Genres
									</Button>
								</Link> */}
						</Card.Body>
					</Card>
					<Card className='home-card-anchor' as={Link} to={"/movies/popular"}>
						<Card.Body>
							<Card.Title>Popular movies</Card.Title>
							<Card.Text>
								Browse the most popular movies out right now!
							</Card.Text>
							{/* <Link to={"/movies/popular"}>
										<Button className='pink' variant='dark'>
											Popular movies
										</Button>
									</Link> */}
						</Card.Body>
					</Card>
					<Card className='home-card-anchor' as={Link} to={"/movies/latest"}>
						<Card.Body>
							<Card.Title>Latest Releases</Card.Title>
							<Card.Text>Browse the latest film releases</Card.Text>
							{/* <Link to={"/movies/latest"}>
									<Button className='pink' variant='dark'>
										Latest releases
									</Button>
								</Link> */}
						</Card.Body>
					</Card>
					<Card
						className='home-card-anchor'
						as={Link}
						to={"/movies/top-listed"}
					>
						<Card.Body>
							<Card.Title>Top Rated</Card.Title>
							<Card.Text>
								Browse the top rated movies of all time, as voted by our users
							</Card.Text>
							{/* <Link to={"/movies/top-listed"}>
										<Button className='pink' variant='dark'>
											Top Rated Movies
										</Button>
									</Link> */}
						</Card.Body>
					</Card>
				</Container>
				{isLoading && <LoadingSpinner />}
				<Col>
					<h2>
						trending movies: {timeWindow === "day" ? "today" : "This week"}
					</h2>
					<Container className='button-container'>
						<Button onClick={() => setTimeWindow("day")} variant='dark'>
							Trending today
						</Button>
						<Button onClick={() => setTimeWindow("week")} variant='dark'>
							Trending this week
						</Button>
					</Container>
				</Col>

				{data && <MoviesGrid title={null} data={data} />}
			</Container>
		</>
	)
}

export default HomePage
