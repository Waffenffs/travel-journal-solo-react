import React from "react"
import "./App.css"
import Data from './Data'
import Navbar from "./components/Navbar"
import Card from "./components/Card"

const App = () => {
  const travelCard = Data.map(data => {
    return <Card 
      key={data.id}
      {...data}
    />
  })

  return(
    <div>
      <Navbar />
      <div className="myCards">{travelCard}</div>
    </div>
  )
}

export default App
