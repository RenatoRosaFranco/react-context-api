import React, { useContext } from "react";
import Students from "./components/Students";

import UserProvider, { UserContext } from './contexts/user';

function App() {
  const { students } = useContext(UserContext);

  return (
    <UserProvider value={{ students }}>
      <>
        <Title>
          <h1>Escola</h1>
          <strong>Bem vindo a escola!!!</strong>
        </Title>
        <hr />

        <Students />
      </>
    </UserProvider>
  );
}

export default App;

function Title({ children }) {
  return(
      <>
        { children }
      </>
  )
}