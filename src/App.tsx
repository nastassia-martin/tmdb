import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Routes, Route } from "react-router-dom"

import "./assets/scss/App.scss"
import HomePage from "./pages/HomePage"
import Navigation from "./components/Navigation"
import PopularMovies from "./pages/PopularMoviesPage"

const App = () => {
	// const query = useQuery({
	// 	queryKey: ["genres"],
	// 	queryFn: TMBD_API.getAllGenres,
	// })
	// console.log(query.data)
	return (
		<div id="app">
			<Navigation />
			<>
				<Routes>
					<Route path="/" element={<HomePage />} />
					{/* /genres */}
					{/* <Route path="/genres"> */}
					{/* <Route path="" element={<GenresPage />} /> */}
					{/* /genres/:id */}
					{/* <Route path=":id" element={<GenrePage />} /> */}
					{/* </Route> */}
					{/* /movies */}
					<Route path="/movies/popular" element={<PopularMovies />} />
					{/* <Route path="/movie/:id" element={<MoviePage />} /> */}

					{/* /people */}
					{/* <Route path="/person/:id" element={<PersonPage />} /> */}
				</Routes>
			</>
			<ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
		</div>
	)
}

export default App
