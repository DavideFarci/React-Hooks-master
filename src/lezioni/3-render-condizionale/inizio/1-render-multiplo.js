import React, { useState, useEffect } from "react";
import axios from "axios";

const url = "https://api.github.com/users/QuincyLarson";

const ConditionalCompining = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [user, setUser] = useState("Default user");

  const getData = async () => {
    setError(false);
    setLoading(true);
    try {
      const response = await axios.get(url);
      const { login } = response.data;
      setUser(login);
    } catch (error) {
      console.log(error);
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorComponent />;
  }

  return (
    <div>
      <h2>{user}</h2>
    </div>
  );
};

const Loading = () => {
  return (
    <div>
      <h2> Loading... </h2>
    </div>
  );
};

const ErrorComponent = () => {
  return (
    <div>
      <h2> Sorry, there is an Error!</h2>
    </div>
  );
};

export default ConditionalCompining;
