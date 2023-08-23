import "./assets/scss/App.scss"
import { useQuery } from "@tanstack/react-query"
import * as TMBD_API from "./services/themoviedbAPI"

function App() {
	const query = useQuery({
		queryKey: ["genres"],
		queryFn: TMBD_API.getAllGenres,
	})
	console.log(query.data)
	return (
		<>
			<h1>Hello Code Hunter</h1>
		</>
	)
}

export default App
