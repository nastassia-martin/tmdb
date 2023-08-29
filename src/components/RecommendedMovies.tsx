import React from "react"
import { GenericMovieData } from "../types/index.types"
interface IProps {
	results: GenericMovieData[]
}

const RecommendedMovies: React.FC<IProps> = ({ results }) => {
	return <div></div>
}

export default RecommendedMovies
