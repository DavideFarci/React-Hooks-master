import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
const url = "https://api.github.com/users";

const FetchComponent = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const response = await axios.get(url);
    console.log(response.data);
    setUsers(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <h1>Fetch Component</h1>
      <ul className="users">
        {users.map((user) => {
          const { login: name, id, avatar_url: img, html_url: github } = user;
          return (
            <li key={id} className="shadow">
              <img src={img} alt={name} />
              <div>
                <h5>{name}</h5>
                <a href={github}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default FetchComponent;
