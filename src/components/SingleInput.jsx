export default function SingleInput({label, inputsToCalculate, onChange}) {
  function addSpacesBeforeUppercaseToUppercase(str) {
    return str.replace(/([A-Z])/g, ' $1').trim().toUpperCase();
  }

  return (
    <p>
      <label>{addSpacesBeforeUppercaseToUppercase(label)}</label>
      <input
        type="number"
        required
        value={inputsToCalculate[label]}
        onChange={(event) =>
          onChange(label, event.target.value)
        }
      />
    </p>
  );
}