import React, {useState, useEffect} from 'react'
import './App.css';
import Form from "./Form"
import DisplayUglyThings from "./DisplayUglyThings"

function App() {
  return (
    <div className="App">
      <Form />
      <DisplayUglyThings />
    </div>
  );
}

export default App;
