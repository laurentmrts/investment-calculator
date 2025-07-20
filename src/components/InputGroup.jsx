import UserInput from "./UserInput.jsx";

export default function InputGroup() {
  return (
    <div id="user-input" className="input-group">
      <UserInput label="INITIAL INVESTMENT" />
      <UserInput label="ANNUAL INVESTMENT" />
      <UserInput label="EXPECTED RETURN" />
      <UserInput label="DURATION" />
    </div>
  );
}