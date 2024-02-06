import { useState } from "react"
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"

import "./index.css"

const initialInputs = {
  initialInvestment: 1000,
  annualInvestment: 100,
  expectedReturn: 5,
  duration: 1
}

function App() {
  const [userInput, setUserInput] = useState(initialInputs)

  function handleChange(inputName, inputValue) {   
    setUserInput(prev => ({
      ...prev,
      [inputName]: +inputValue
    }))
  }  

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onHandleChange={handleChange} />         
      {userInput.duration > 0 && <Results userInput={userInput} />}   
      {userInput.duration < 1 && 
      <p className="center">Please enter a valid duration (greather than 0).</p>}
    </>
  )
}

export default App
