import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { forwardRef } from "react";

function App() {
  const [formdata, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "india",
    street: "",
    zip: "",
    comments: false,
    condidate: false,
    offers: false,
    pusheverything: false,
  });
  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
  function submitHandler(event) {
    event.preventDefault();
    console.log("finnally prinying the value");
    console.log(formdata);
  }
  return (
    <div className=" flex flex-col items-center mt-2">
      <label htmlFor="firstName">First Name</label>
      <input
        type="text"
        placeholder="Asif"
        id="firstName"
        name="firstName"
        value={formdata.value}
        onChange={changeHandler}
        className="outline"
      />
      <br />
      <label htmlFor="lastName">Last Name</label>

      <input
        type="text"
        placeholder="khan"
        id="lastName"
        name="lastName"
        onChange={changeHandler}
        className="outline"
        value={formdata.lastName}
      />
      <br></br>
      <label htmlFor="email">E-mail</label>
      <input
        type="email"
        placeholder="Email"
        onChange={changeHandler}
        id="email"
        name="email"
        value={formdata.email}
        className=" outline"
      />
      <br />
      <legend htmlFor="country">Country</legend>
      <select
        id="country"
        name="country"
        value={formdata.value}
        onChange={changeHandler}
        className="outline"
      >
        <option>India</option>
        <option>united State </option>
        <option>UAE</option>
        <option>canada</option>
      </select>
      <br />
      <label htmlFor="street">State Address</label>
      <input
        type="text"
        id="street"
        name="street"
        placeholder="B-251 Mumbai"
        value={formdata.value}
        onChange={changeHandler}
        className="outline"
      />
      <br />
      <label htmlFor="zip">Zip code / Post Code</label>
      <input
        type="text"
        name="zip"
        id="zip"
        className="outline"
        placeholder="000000"
        value={formdata.value}
        onChange={changeHandler}
      />
      <form onSubmit={submitHandler}>
        <fieldset>
          <legend>By Email</legend>
          <div className="flex">
            <input
              type="checkbox"
              id="comments"
              name="comments"
              value={formdata.value}
              onChange={formdata.value}
              // className="outline"
            />
            <div>
              <label htmlFor="comments">Comments</label>
              <p>when get notofide someone post on posting</p>
            </div>
          </div>
          <div className="flex">
            <input
              type="checkbox"
              id="condidate"
              name="comments"
              value={formdata.value}
              onChange={formdata.value}
              // className="outline"
            />
            <div>
              <label htmlFor="condidate">Condidate </label>
              <p>when get notofide someone post on posting</p>
            </div>
          </div>
          <div className="flex">
            <input
              type="checkbox"
              id="Offers"
              name="comments"
              value={formdata.value}
              onChange={formdata.value}
              // className="outline"
            />
            <div>
              <label htmlFor="comments">Offer</label>
              <p>when get notofide someone post on posting</p>
            </div>
          </div>
        </fieldset>
        <br />
        <fieldset>
          <legend>PushNotification</legend>
          <p>there are declaretive sms to your mobile phone</p>
          <input
            type="radio"
            id="pusheverything"
            name="pusheverything"
            onChange={formdata.value}
            value="same as email"
          />
          <label htmlFor="pusheverything">same as email</label>
          <br></br>

          <input
            type="radio"
            id="sae"
            name="pusheverything"
            onChange={formdata.value}
            value="Same as Email "
          />
          <label htmlFor="sae">Everything</label>
        </fieldset>
        <button className=" bg-blue-500 text-white font-bold rounded py-2  px4">
          Save
        </button>
      </form>
    </div>
  );
}

export default App;
