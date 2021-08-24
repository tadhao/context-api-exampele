import UserContext from "../hooks/context"

const ComponentA = () => {
	return(
		<UserContext.Consumer>
			{(udetail)=>{
				return(
					<div>Hello {udetail}</div>
				)
			}}
		</UserContext.Consumer>
	)
}

export default ComponentA;