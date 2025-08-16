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

  const intputIsValid = userInput.duration >= 1;

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
      <InputGroup inputsToCalculate={userInput} onChange={handleInputChange} testId="inputs"/>
      {intputIsValid ? <Results input={userInput} testId="results"/> :
            <p className="center" data-testid="warn-duration">Please enter a duration greater than zero</p>}
    </>
  )
}

export default App
