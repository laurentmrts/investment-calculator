import SingleInput from "./SingleInput.jsx";

export default function InputGroup({onChange, inputsToCalculate, testId}) {
  const initialInvestment = 'initialInvestment';
  const annualInvestment = 'annualInvestment';
  const expectedReturn = 'expectedReturn';
  const duration = 'duration';

  return (
    <section id="user-input">
      <div className="input-group" data-testid={testId}>
            <SingleInput inputsToCalculate={inputsToCalculate[initialInvestment]} onChange={onChange}
                         label={initialInvestment} testId={testId && `${testId}-${initialInvestment}`}/>
            <SingleInput inputsToCalculate={inputsToCalculate[annualInvestment]} onChange={onChange}
                         label={annualInvestment} testId={testId && `${testId}-${annualInvestment}`}/>
            <SingleInput inputsToCalculate={inputsToCalculate[expectedReturn]} onChange={onChange}
                         label={expectedReturn} testId={testId && `${testId}-${expectedReturn}`}/>
            <SingleInput inputsToCalculate={inputsToCalculate[duration]} onChange={onChange} label={duration}
                         testId={testId && `${testId}-${duration}`}/>
      </div>
    </section>
  );
}