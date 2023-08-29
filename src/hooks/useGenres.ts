import { useQuery } from "@tanstack/react-query"
import { getAllGenres } from "../services/themoviedbAPI"

const useGenres = () => {
	return useQuery({
		queryKey: ["genres"],
		queryFn: getAllGenres,
	})
}

export default useGenres
