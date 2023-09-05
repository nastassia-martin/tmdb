import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import { Link, useSearchParams } from "react-router-dom"
import useTrending from "../hooks/useTrending"
import MoviesGrid from "../components/MoviesGrid"
import LoadingSpinner from "../components/LoadingSpinner"
import ErrorAlert from "../components/ErrorAlert"
import useLocalStorage from "../hooks/useLocalStorage"
import { GenericMovieData } from "../types/movies.types"

const HomePage = () => {
	//use searchParams obj to read key/value `timeWindow: 'week'`
	const [searchParams, setSearchParams] = useSearchParams({
		timeWindow: "week",
	})
	//get value of `timeWindow` or default value `week`
	//in case user hits HomeButton whilst on HomePage
	const timeWindow = searchParams.get("timeWindow") || "week"

	const { data, error, isLoading } = useTrending(timeWindow)

	// const [localStorageMovies, setLocalStorageMovies] = useState<
	// 	GenericMovieData[]
	// >(window.localStorage.getItem("movie"))
	// if (localStorageMovies) {
	// 	localStorageMovies.map((movie) => {
	// 		console.log(movie.title)
	// 	})
	// }

	const [storedValue] = useLocalStorage<GenericMovieData[]>("movie", [])
	if (storedValue) {
		storedValue.map((movie) => {
			console.log(movie.title)
		})
	}
	//console.log(storedValue)
	return (
		<>
			{error && (
				<ErrorAlert error={error instanceof Error ? error.message : null} />
			)}
			{isLoading && <LoadingSpinner />}
			<Container>
				<h1>CODE HUNTER 2023</h1>
				<Container className='home-container'>
					<Card className='home-card-anchor' as={Link} to={"/genres"}>
						<Card.Body>
							<Card.Title>Genres</Card.Title>
							<Card.Text>Deep dive into your favourite genres</Card.Text>
						</Card.Body>
					</Card>
					<Card className='home-card-anchor' as={Link} to={"/movies/popular"}>
						<Card.Body>
							<Card.Title>Popular movies</Card.Title>
							<Card.Text>
								Browse the most popular movies out right now!
							</Card.Text>
						</Card.Body>
					</Card>
					<Card className='home-card-anchor' as={Link} to={"/movies/latest"}>
						<Card.Body>
							<Card.Title>Latest Releases</Card.Title>
							<Card.Text>Browse the latest film releases</Card.Text>
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
						</Card.Body>
					</Card>
				</Container>
				<div>
					{storedValue && storedValue.map((movie) => <p>{movie.title}</p>)}
				</div>
				<Col>
					<h2>
						trending movies: {timeWindow === "day" ? "today" : "This week"}
					</h2>
					<Container className='button-container'>
						<Button
							onClick={() => setSearchParams({ timeWindow: "day" })}
							variant='dark'
						>
							Trending today
						</Button>
						<Button
							onClick={() => setSearchParams({ timeWindow: "week" })}
							variant='dark'
						>
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
