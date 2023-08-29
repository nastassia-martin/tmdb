import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import { useNavigate } from "react-router-dom"

interface IProps {
	error: string | null
}

const ErrorAlert: React.FC<IProps> = ({ error }) => {
	const navigate = useNavigate()

	{
		return (
			<Container className='error-alert'>
				<h2>Something has gone horribly wrong!</h2>
				{error && <p className='main-colour'>{error}</p>}
				<div className='nav-back'>
					<Button onClick={() => navigate("/")} variant='light'>
						&laquo; Go to Home Page
					</Button>
				</div>
			</Container>
		)
	}
}

export default ErrorAlert
