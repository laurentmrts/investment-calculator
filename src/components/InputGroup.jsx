import SingleInput from "./SingleInput.jsx";

export default function InputGroup({ onChange, inputsToCalculate }) {
  const initialInvestment = 'initialInvestment';
  const annualInvestment = 'annualInvestment';
  const expectedReturn = 'expectedReturn';
  const duration = 'duration';

  return (
    <section id="user-input">
      <div className="input-group">
        <SingleInput inputsToCalculate={inputsToCalculate[initialInvestment]} onChange={onChange} label={initialInvestment}/>
        <SingleInput inputsToCalculate={inputsToCalculate[annualInvestment]} onChange={onChange} label={annualInvestment}/>
        <SingleInput inputsToCalculate={inputsToCalculate[expectedReturn]} onChange={onChange} label={expectedReturn}/>
        <SingleInput inputsToCalculate={inputsToCalculate[duration]} onChange={onChange} label={duration}/>
      </div>
    </section>
  );
}