import { useQuery } from "@tanstack/react-query"
import { searchMovie } from "../services/themoviedbAPI"

const useSearch = (query: string, page: number) => {
	return useQuery({
		queryFn: () => searchMovie(query, page),
		queryKey: ["query", { query: query, page: page }],
		enabled: !!query,
		keepPreviousData: true,
	})
}
export default useSearch
