export default function InputGroup({ onChange, inputsToCalculate }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input
            type="number"
            required
            value={inputsToCalculate.initialInvestment}
            onChange={(event) =>
              onChange('initialInvestment', event.target.value)
            }
          />
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input
            type="number"
            required
            value={inputsToCalculate.annualInvestment}
            onChange={(event) =>
              onChange('annualInvestment', event.target.value)
            }
          />
        </p>
        <p>
          <label>EXPECTED RETURN</label>
          <input
            type="number"
            required
            value={inputsToCalculate.expectedReturn}
            onChange={(event) =>
              onChange('expectedReturn', event.target.value)
            }
          />
        </p>
        <p>
          <label>DURATION</label>
          <input
            type="number"
            required
            value={inputsToCalculate.duration}
            onChange={(event) =>
              onChange('DURATION', event.target.value)
            }
          />
        </p>
      </div>
    </section>
  );
}