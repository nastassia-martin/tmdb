import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import { Link, NavLink } from "react-router-dom"

const Navigation = () => {
	return (
		<Navbar expand="md">
			<Container>
				<Navbar.Brand className="nav" as={Link} to="/">
					CodeHunter 2023
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto nav-items">
						<Nav.Link as={NavLink} to="/genres">
							Genres
						</Nav.Link>
						<Nav.Link as={NavLink} end to="/movies/popular">
							Popular Movies
						</Nav.Link>
						<Nav.Link as={NavLink} to="/movies/latest">
							Latest Releases
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default Navigation
