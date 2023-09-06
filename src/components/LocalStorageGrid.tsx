import Container from "react-bootstrap/Container"
import { Link } from "react-router-dom"
import fallback from "../assets/images/popcorn.jpg"
import useLocalStorage from "../hooks/useLocalStorage"
import { GenericMovieData } from "../types/movies.types"

const LocalStorageGrid = () => {
	const imageURL = "https://image.tmdb.org/t/p/w300"

	const [storedValue] = useLocalStorage<GenericMovieData[]>("movie", [])
	if (!storedValue) {
		return
	}
	const title = storedValue.length > 0 ? "Recently Viewed" : null
	return (
		<>
			<Container className='p-3 local-resource-container'>
				<h2>{title}</h2>
				<div className='localstorage-container'>
					{storedValue &&
						storedValue.map((movie) => (
							<div
								as={Link}
								to={`/movies/${movie.id}`}
								key={movie.id}
								className='movie-img-container'
							>
								{movie.poster_path === null ? (
									<img
										className='movies-fallback-img img-fluid'
										src={fallback}
										alt={movie.title}
									/>
								) : (
									<img
										className='img-fluid'
										src={imageURL + movie.poster_path}
										alt={movie.title}
									/>
								)}
							</div>
						))}
					v
				</div>
			</Container>
		</>
	)
}
export default LocalStorageGrid
