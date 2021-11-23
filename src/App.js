import './App.css';
import React, {useState, useEffect} from 'react';

function App() {
  const [t1, setT1]=useState('');
  function clickHandler() {
    fetch("http://localhost/test_react_php/",{
      method : 'POST',
      header : {
        'Content-Type' : 'application/x-www-form-urlencoded',
      },
      body : JSON.stringify({action : 1})
    })
    .then (response=>response.text())
    .then (response=>{
      console.log(response);
      setT1(response);
    })
  } 
  return (
      <div className="container">
        <h1>Заголовок сайта</h1>
        <button onClick={clickHandler}>Go</button>
        <div>{t1}</div>
      </div>  
  );
}

export default App;
