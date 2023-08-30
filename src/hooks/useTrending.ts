import { useQuery } from "@tanstack/react-query"
import { getTrendingMovies } from "../services/themoviedbAPI"

const useTrending = (time_window: string) => {
	return useQuery({
		queryKey: ["movies,", { time_window: time_window }],
		queryFn: () => getTrendingMovies(time_window),
	})
}
export default useTrending
