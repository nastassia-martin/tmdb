import { useQuery } from "@tanstack/react-query"
import { useParams } from "react-router-dom"

import { getPersonById } from "../services/themoviedbAPI"
import Person from "../components/Person"

const PersonPage = () => {
	const { id } = useParams()
	const personId = Number(id)

	const { data } = useQuery({
		queryFn: () => getPersonById(personId),
		queryKey: ["person", { person_id: personId }],
	})

	return <>{data && <Person data={data} />}</>
}

export default PersonPage
