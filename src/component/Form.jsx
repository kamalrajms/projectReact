import React, { useState } from "react";

export default function Form() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    terms: false,
  });
  const [error, setError] = useState("");

  const handleinput = (e) => {
    const { name, type, value, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checked" ? checked : value,
    });
  };

  const handleForm = (e) => {
    e.preventDefault();

    if (!formData.username || !formData.email || !formData.password) {
      setError("All fields are required");
      return;
    }
    if (!formData.terms) {
      setError("you must accept");
      return;
    }
    setError("");
    alert("Form submitted");
    console.log(formData);
  };

  return (
    <div>
      <form onSubmit={handleForm}>
        <h2>Register form</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <input
          type="text"
          name="username"
          placeholder="name"
          value={formData.username}
          onChange={handleinput}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleinput}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          value={formData.password}
          onChange={handleinput}
        />
        <input
          type="checkbox"
          name="terms"
          onChange={handleinput}
          checked={formData.terms}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
