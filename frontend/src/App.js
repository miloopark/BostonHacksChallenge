import React, { useState } from "react";
import Form from "./Form";
import "./App.css"; 

export default () => {
  const [getMessage, setGetMessage] = useState([]);

  const toggleComplete = i =>
  setGetMessage(
      getMessage.map(
        (todo, k) =>
          k === i
            ? {
                ...todo,
                complete: !todo.complete
              }
            : todo
      )
    );

  return (
    <div className="App">
      To Do List
      <Form
        onSubmit={text => setGetMessage([{ text, complete: false }, ...getMessage])}
      />
      <div>
        {getMessage.map(({ text, complete }, i) => (
          <div
            key={text}
            onClick={() => toggleComplete(i)}
            style={{
              textDecoration: complete ? "line-through" : ""
            }}
          >
            {text}
          </div>
        ))}
      </div>
      <button onClick={() => setGetMessage([])}>Refresh</button>
    </div>
  );
};

/*
useEffect(()=>{
    axios.get('http://localhost:5000/hello').then(response => {
      console.log("SUCCESS", response)
      setGetMessage(response)
    }).catch(error => {
      console.log(error)
    })

  }, [])
  */