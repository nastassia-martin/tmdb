import { ClockLoader } from "react-spinners"

const LoadingSpinner = () => {
	return (
		<div className='loading-container'>
			<ClockLoader color='#ca2c92' size={150} speedMultiplier={1.5} />
		</div>
	)
}

export default LoadingSpinner
