import React, {useState} from 'react'
import './App.css';
import Form from "./Form"
import DisplayUglyThings from "./DisplayUglyThings"

function App() {
  const [item, setItem] = useState({})

  const editItem = (item) => {
    console.log(item)
    setItem(item)
  }

  return (
    <div className="App">
      <Form item={item}/>
      <DisplayUglyThings editItem={editItem}/>
    </div>
  );
}

export default App;
