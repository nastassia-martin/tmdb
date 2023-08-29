import Container from "react-bootstrap/Container"
import PreviousPage from "./PreviousPage"

const NoDataFound = () => {
	return (
		<Container className='error-alert'>
			<h2>Something has gone horribly wrong!</h2>
			<PreviousPage />
		</Container>
	)
}

export default NoDataFound
