import SingleInput from "./SingleInput.jsx";

export default function InputGroup({ onChange, inputsToCalculate }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <SingleInput inputsToCalculate={inputsToCalculate} onChange={onChange} label='initialInvestment'/>
        <SingleInput inputsToCalculate={inputsToCalculate} onChange={onChange} label='annualInvestment'/>
        <SingleInput inputsToCalculate={inputsToCalculate} onChange={onChange} label='expectedReturn'/>
        <SingleInput inputsToCalculate={inputsToCalculate} onChange={onChange} label='duration'/>
      </div>
    </section>
  );
}