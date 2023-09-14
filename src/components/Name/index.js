import { useContext } from "react";
import { UserContext } from '../../contexts/user';

const Name = () => {
	const { students, setStudents } = useContext(UserContext);

	return(
		<>
			<h1 style={{ color: '#FF0000' }}>Bem vindo: { students }</h1>

			<button onClick={ () => { setStudents('Danzo') } }>
				Troca nome
			</button>
		</>
	)
}

export default Name;