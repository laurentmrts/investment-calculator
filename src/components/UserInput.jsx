import {useState} from "react";

export default function UserInput({label, valueInput}) {
  const [value, setValue] = useState(valueInput);

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <div>
      <label>{label}</label>
      <input type="number" required value={value} onChange={handleChange} />
    </div>
  )
}