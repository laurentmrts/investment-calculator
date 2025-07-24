import InputGroup from "./components/InputGroup.jsx";
import Results from "./components/Results.jsx";
import {useState} from "react";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1000,
    expectedReturn: 5,
    duration: 10
  })

  function handleInputChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      };
    });
  }

  return (
    <>
      <InputGroup inputsToCalculate={userInput} onChange={handleInputChange} />
      <Results input={userInput}/>
    </>
  )
}

export default App
