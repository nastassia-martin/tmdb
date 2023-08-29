import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"

import { getPersonById } from "../services/themoviedbAPI"
import Person from "../components/Person"
import LoadingSpinner from "../components/LoadingSpinner"
import ErrorAlert from "../components/ErrorAlert"

const PersonPage = () => {
	const { id } = useParams()
	const personId = Number(id)

	const { data, isLoading, error } = useQuery({
		queryFn: () => getPersonById(personId),
		queryKey: ["person", { person_id: personId }],
	})

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
