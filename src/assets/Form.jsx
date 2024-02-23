import { useState } from "react";

export default function Form() {
  // let [fullName, setFullName] = useState("rimjhim");
  // let handleNameChange = (event) => {
  //   setFullName(event.target.value);
  // };
  let [formData, setFormData] = useState({
    fullName: "",
    username: "",
  });
  let handleInputChange = (event) => {
    // let fieldName = event.target.name;
    // let newValue = event.target.value;

    setFormData((currData) => {
      // currData[fieldName] = newValue;
      return { ...currData, [event.target.name]: event.target.value };
    });
  };
  let handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
      fullName: "",
      username: "",
    });
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullName">Full Name:</label>
      <input
        placeholder="enter your full name"
        type="text"
        value={formData.fullName}
        onChange={handleInputChange}
        id="fullName"
        name="fullName"
      />
      <br></br>
      <br></br>
      <label htmlFor="username">User Name:</label>
      <input
        placeholder="enter your full name"
        type="text"
        value={formData.username}
        onChange={handleInputChange}
        id="username"
        name="username"
      />
      <button>Submit</button>
    </form>
  );
}
