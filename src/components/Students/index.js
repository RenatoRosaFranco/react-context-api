import Name from "../Name";

const Students = (props) => {
	let { name, changeName } = props;

	return(
		<>
			<h1>Alunos</h1>

			<Name name={name} changeName={changeName}/>
		</>
	)
}

export default Students;