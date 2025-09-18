import React, { useState } from "react";

export default function MultipleFields() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="name"
        onChange={handleChange}
        value={formData.name}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="number"
        name="age"
        onChange={handleChange}
        placeholder="Age"
        value={formData.age}
      />
    </div>
  );
}
