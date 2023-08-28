import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"

import { getMovieById } from "../services/themoviedbAPI"
import Movie from "../components/Movie"

const MoviePage = () => {
	const { id } = useParams()
	const movieId = Number(id)

	const { data } = useQuery({
		queryFn: () => getMovieById(movieId),
		queryKey: ["movie", { movie_id: movieId }],
	})
	return <>{data && <Movie data={data} />}</>
}

export default MoviePage
