import {useContext} from "react";
import { UserContext } from '../../contexts/user';
import Name from "../Name";

const Students = () => {

	const {
		students,
		studentsQtd,
		setStudentsQtd
	} = useContext(UserContext);

	return(
		<>
			<h1>Alunos</h1>
			<p>Nome do Aluno online: {students}</p>
			<p>Students quantity {studentsQtd}</p>

			<button onClick={ () => { setStudentsQtd(studentsQtd + 1) } }>
				Aumentar numero de Alunos
			</button>

			<Name />
		</>
	)
}

export default Students;