import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"

import { Link } from "react-router-dom"

const HomePage = () => {
	return (
		<Container>
			<h1>CODE HUNTER 2023</h1>
			<Row md={1} sm={1} className="gy-4">
				<Col>
					<Card>
						<Card.Body>
							<Card.Title>Genres</Card.Title>
							<Card.Text>Deep dive into your favourite genres</Card.Text>
							<Link to={"/genres"}>
								<Button className="pink" variant="dark">
									Genres
								</Button>
							</Link>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card>
						<Card.Body>
							<Card.Title>Popular movies</Card.Title>
							<Card.Text>
								Browse the most popular movies as voted by our users
							</Card.Text>
							<Link to={"/movies/popular"}>
								<Button className="pink" variant="dark">
									Popular movies
								</Button>
							</Link>
						</Card.Body>
					</Card>
				</Col>
				<Col>
					<Card>
						<Card.Body>
							<Card.Title>Latest Releases</Card.Title>
							<Card.Text>Browse the latest film releases</Card.Text>
							<Link to={"/movies/latest"}>
								<Button className="pink" variant="dark">
									Latest relases
								</Button>
							</Link>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	)
}

export default HomePage
