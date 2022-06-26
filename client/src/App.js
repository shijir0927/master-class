import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log(data)
      setData(data.message)
    })
  }, []);

  return(
    <div>
      <p>my data: {data}</p>
    </div>
  );
}

export default App;