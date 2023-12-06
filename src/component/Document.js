import React, { useEffect, useState } from "react";
import "./Document.css";
import axios from "axios";

const Document = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/data");
        const myData = response.data.basic_syntax;
        setData(myData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {data.map((d) => (
        <div key={d.name} className="card">
          <h2>{d.name}</h2>
          <p>{d.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Document;
