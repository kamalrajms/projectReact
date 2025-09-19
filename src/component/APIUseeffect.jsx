import React, { useEffect, useState } from "react";

export default function APIUseeffect() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>user data</h1>

      {loading ? (
        <p>Loading.....</p>
      ) : (
        <ul>
          {user.map((user) => (
            <li key={user.id}>
              name:{user.name}---mail:{user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
