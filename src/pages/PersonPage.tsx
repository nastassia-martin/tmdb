import { useParams } from "react-router-dom"
import Person from "../components/Person"
import LoadingSpinner from "../components/LoadingSpinner"
import ErrorAlert from "../components/ErrorAlert"
import usePerson from "../hooks/usePerson"

const PersonPage = () => {
	const { id } = useParams()
	const personId = Number(id)

	const { data, isLoading, error } = usePerson(personId)

	return (
		<>
			{isLoading && <LoadingSpinner />}
			{error && (
				<ErrorAlert error={error instanceof Error ? error.message : null} />
			)}
			{data && <Person data={data} />}
		</>
	)
}

export default PersonPage
