import { SyntheticEvent, useState } from "react";
import "./step1.scss";
import { Link, useLocation } from "react-router-dom";

export default function Step1() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  let [subscribe, setSubscribe] = useState(Boolean);
  const form = {
    name: firstName,
    lastName: lastName,
    date: date,
    gender: gender,
    email: email,
    subscribe: subscribe,
  };

  const location = useLocation();

  const disableBtn = () => {
    let value = Object.values(form).some((value) => value === "");

    return value;
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  console.log(location);

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        type="text"
        name=""
        id=""
        className="form__text"
        placeholder="Enter your name"
        required
      />
      <input
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        type="text"
        name=""
        id=""
        className="form__text"
        placeholder="Enter your lastname"
        required
      />
      <input
        type="date"
        name=""
        id=""
        className="form__date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <div className="form__gender">
        <p>Gender:</p>
        <label htmlFor="male">
          <input
            type="radio"
            name="gender"
            id="male"
            value="Male"
            checked={gender === "Male"}
            onChange={(e) => setGender(e.target.value)}
          />
          Male
        </label>
        <label htmlFor="woman">
          <input
            type="radio"
            name="gender"
            id="woman"
            value="Female"
            checked={gender === "Female"}
            onChange={(e) => setGender(e.target.value)}
          />
          Female
        </label>
        <label htmlFor="other">
          <input
            type="radio"
            name="gender"
            id="other"
            value="Other"
            checked={gender === "Other"}
            onChange={(e) => setGender(e.target.value)}
          />
          Other
        </label>
        <label htmlFor="not">
          <input
            type="radio"
            name="gender"
            id="not"
            value="Not"
            checked={gender === "Not"}
            onChange={(e) => setGender(e.target.value)}
          />
          Rather not say
        </label>
      </div>
      <input
        type="email"
        name=""
        id=""
        className="form__email"
        placeholder="Enter your email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="form__subscribe">
        <p>Would you like to subscribe to our newsletter?</p>
        <label htmlFor="yes">
          Yes
          <input
            type="checkbox"
            name=""
            id="yes"
            checked={subscribe}
            onChange={(e) => setSubscribe((subscribe = true))}
          />
        </label>
        <label htmlFor="no">
          No
          <input
            type="checkbox"
            name=""
            id="no"
            checked={!subscribe}
            onChange={(ev) => setSubscribe((subscribe = false))}
          />
        </label>
      </div>
      <div className="form__btns">
        <button className={location.pathname === "/" ? "hidden" : ""}>
          Previous
        </button>
        <button type="submit" disabled={disableBtn()}>
          <Link to={"/step2"}>Next</Link>
        </button>
      </div>
    </form>
  );
}
