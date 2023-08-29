import { useQuery } from "@tanstack/react-query"
import { getPersonById } from "../services/themoviedbAPI"

const usePerson = (personId: number) => {
	return useQuery({
		queryFn: () => getPersonById(personId),
		queryKey: ["person", { person_id: personId }],
	})
}

export default usePerson
