//import React from "react"
import Card from "react-bootstrap/Card"

const PopularMovies = () => {
	return (
		<Card className="bg-dark text-white">
			<Card.Img src="" alt="" />
			<Card.ImgOverlay>
				<Card.Title>MOVIE.title</Card.Title>
				<Card.Text>
					MOVIE.overview. This is a wider card with supporting text below as a
					natural lead-in to additional content. This content is a little bit
					longer.
				</Card.Text>
				<Card.Text>
					vote average: MOVIE.vote_average, total votes: MOVIE.vote_count
				</Card.Text>
			</Card.ImgOverlay>
		</Card>
	)
}

export default PopularMovies
