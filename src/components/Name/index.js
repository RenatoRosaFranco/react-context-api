const Name = (props) => {
	let { name, changeName } = props;

	return(
		<>
			<h1 style={{ color: '#FF0000' }}>Bem vindo: {name}</h1>

			<button onClick={ () => { changeName('Hanzo') } }>
				Trocar nome
			</button>
		</>
	)
}

export default Name;