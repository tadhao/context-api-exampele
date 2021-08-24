import { useContext } from 'react'
import UserContext from "../hooks/context"

const ComponentB = () => {
	const bValue = useContext(UserContext)
	return(
		<div>Hello {bValue}</div>
	);
}

export default ComponentB