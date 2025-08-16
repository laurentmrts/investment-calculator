export default function SingleInput({label, inputsToCalculate, onChange, testId}) {
  function addSpacesBeforeUppercaseToUppercase(str) {
    return str.replace(/([A-Z])/g, ' $1').trim().toUpperCase();
  }

  return (
    <p data-testid={testId}>
      <label data-testid={testId && `${testId}-label`}>{addSpacesBeforeUppercaseToUppercase(label)}</label>
      <input
        data-testid={testId && `${testId}-input`}
        type="number"
        required
        value={inputsToCalculate}
        onChange={(event) =>
          onChange(label, event.target.value)
        }
      />
    </p>
  );
}