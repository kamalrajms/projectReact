import React from "react";

export default function ListRendering() {
  const fruits = ["apple", "banana", "mango", "jbh", "sbfuie"];

  const user = [
    { id: 1, name: "Ak" },
    { id: 2, name: "rahul" },
    { id: 3, name: "ranjith" },
  ];
  console.log(user);

  return (
    <div>
      <ul>
        {fruits.map((name, ind) => (
          <li key={ind}>{name}</li>
        ))}
      </ul>

      <h2>persons detailes</h2>

      {user.length > 0 ? (
        <ol>
          {user.map((person) => (
            <li key={person.id}>{person.name}</li>
          ))}
        </ol>
      ) : (
        <p>no data found</p>
      )}
    </div>
  );
}
