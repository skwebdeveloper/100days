import React, { useEffect, useState } from 'react'
import "./day5.css"


const App = () => {
  const [ initial, final ] = useState([])

  useEffect(() =>{
    fetch("http://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote")
    .then((res) => res.json())
    .then((data) => final(data.starWarsQuote))
    .catch(() =>{
        console.log("Error")
    })
  },[])


  return (
    <div className="App">
    <div className="div1"><h1>Star Wars Quotes</h1></div>
    <div className="div4"><h2>{initial}</h2></div>
    </div>
  )
}

export default App
