import React, { useState, useEffect } from "react";
import Hollywood from "../contentpage/index";
import axios from "axios";

const Mainpage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://6438e3684660f26eb1a560d6.mockapi.io/users"
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <center>
        <h3>Streaming...!</h3>
        <form onSubmit={handleSubmit}></form>
        {data.length >= 1 ? <Hollywood data={data} /> : null}
      </center>
    </div>
  );
};

export default Mainpage;
