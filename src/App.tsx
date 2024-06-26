import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { Routes, Route } from "react-router-dom"

import "./assets/scss/App.scss"
import HomePage from "./pages/HomePage"
import Navigation from "./components/Navigation"
import TopMoviesPage from "./pages/TopMoviesPage"
import MoviePage from "./pages/MoviePage"
import LatestMovieReleasesPage from "./pages/LatestMovieReleasesPage"
import PopularMoviesPage from "./pages/PopularMoviesPage"
import PersonPage from "./pages/PersonPage"
import GenresPage from "./pages/GenresPage"
import GenrePage from "./pages/GenrePage"
import NotFoundPage from "./pages/NotFoundPage"
import SearchPage from "./pages/SearchPage"

const App = () => {
	return (
		<div id='app'>
			<Navigation />
			<>
				<Routes>
					<Route path='/' element={<HomePage />} />
					{/* /genres */}
					<Route path='/genres'>
						<Route path='' element={<GenresPage />} />
						{/* /genres/:id */}
						<Route path=':id' element={<GenrePage />} />
					</Route>
					{/* /movies */}
					<Route path='/movies/popular' element={<PopularMoviesPage />} />
					<Route path='/movies/latest' element={<LatestMovieReleasesPage />} />
					<Route path='/movies/top-listed' element={<TopMoviesPage />} />
					<Route path='/movies/search' element={<SearchPage />} />
					<Route path='/movies/:id' element={<MoviePage />} />
					{/* /people */}
					<Route path='/people/:id' element={<PersonPage />} />
					<Route path='/*' element={<NotFoundPage />} />
				</Routes>
			</>
			<ReactQueryDevtools initialIsOpen={false} position='bottom-right' />
		</div>
	)
}

export default App
