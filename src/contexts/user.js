import { useState, createContext } from "react";

export const UserContext = createContext({});

function UserProvider({children}) {
	const [students, setStudents] = useState('Hanzo');
	const [studentsQtd, setStudentsQtd] = useState(1)

	return(
			<UserContext.Provider
					value={{
						students,
						setStudents,
						studentsQtd,
						setStudentsQtd
			}}>
				{ children }
			</UserContext.Provider>
	)
};

export default UserProvider;