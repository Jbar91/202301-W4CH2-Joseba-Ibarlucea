import "./step2.scss";

export default function Step2() {
  return (
    <form className="form">
      <input
        type="text"
        name=""
        id=""
        className="form__text"
        placeholder="Enter a Username"
        required
      />
      <input
        type="password"
        name=""
        id=""
        className="form__password"
        placeholder="Enter a password"
        required
      />
      <input
        type="password"
        name=""
        id=""
        className="form__password"
        placeholder="Confirm your password"
        required
      />
      <select name="account-type" id="" className="form__select">
        <option value="personal">Personal</option>
        <option value="professional">Professional</option>
        <option value="Business">Business</option>
      </select>
    </form>
  );
}
