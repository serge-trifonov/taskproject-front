import React, { useState } from 'react';

function App() {

  

  const [load,getLoad]=useState("loading in process");

  const loading = async () => {
    const response = await fetch(`http://localhost:8080/data`);
    return await response.json();
  };

  const progress = async () => {
    const response = await fetch(`http://localhost:8080/data/progression`);
    return await response.json();
  }; 

  return (

    <div className="App">
      
      <div>loading %</div>
      <div>{load}</div>

      <div>
        <button onClick={loading}>START</button>
      </div>

      <div>
        <button onClick={progress}>START</button>
      </div>
   
    </div>
  );
}

export default App;
