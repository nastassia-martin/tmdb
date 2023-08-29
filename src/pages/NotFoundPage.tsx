import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import { Link } from "react-router-dom"

const NotFoundPage = () => {
	return (
		<Container className='error-alert'>
			<h2>Page not found</h2>
			<Link to='/'>
				<Button variant='light'>&laquo;Go to Home Page</Button>
			</Link>
		</Container>
	)
}

export default NotFoundPage
