import { useState } from "react";

export default function CommentsForm() {
  let [formData, setFormData] = useState({
    username: "",
    remarks: "",
    rating: 5,
  });

  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };

  let handleSubmit = (event) => {
    event.preventDefault();
    setFormData({
      username: "",
      remarks: "",
      rating: 5,
    });
  };

  return (
    <div>
      <h1>Give a comment !.</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        &nbsp;
        <input
          placeholder="username"
          type="text"
          value={formData.username}
          onChange={handleInputChange}
          id="username"
          name="username"
        />
        <br></br>
        <br></br>
        <textarea
          placeholder="add few remarks"
          value={formData.remarks}
          onChange={handleInputChange}
          name="remarks"
        >
          Remarks
        </textarea>
        <br></br>
        <input
          placeholder="rating"
          type="number"
          value={formData.rating}
          onChange={handleInputChange}
          min={1}
          max={5}
          name="rating"
        />
        <br></br>
        <br></br>
        <button>Add Comment</button>
      </form>
    </div>
  );
}
