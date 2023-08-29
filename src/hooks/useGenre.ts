import { useQuery } from "@tanstack/react-query"
import { getGenreById } from "../services/themoviedbAPI"

const useGenre = (genreId: number, page: number) => {
	return useQuery({
		queryFn: () => getGenreById(genreId, page),
		queryKey: ["genre", { genre_id: genreId, page: page }],
		keepPreviousData: true,
	})
}

export default useGenre
