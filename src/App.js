import React from "react";
import Students from "./components/Students";

import { useState } from "react";

function App() {
  const [studentName, setStudentName] = useState('Simon');

  return (
    <div className="App">
      <h1>Escola</h1>
      <hr />

      <Students name={studentName} changeName={setStudentName}/>
    </div>
  );
}

export default App;
