import { useQuery } from "@tanstack/react-query"

import { getAllGenres } from "../services/themoviedbAPI"
import GenreList from "../components/GenreList"

const GenresPage = () => {
	const { data } = useQuery({
		queryKey: ["genres"],
		queryFn: getAllGenres,
	})

	return <>{data && <GenreList data={data} />}</>
}

export default GenresPage
