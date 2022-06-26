import React, { useEffect, useState } from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import { Layout } from "./components";
import { CoursesPage, HomePage } from "./pages";
import "./App.css";

const App = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      setData(data.message)
    })
  }, []);

  return(
    <Layout>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/courses" element={<CoursesPage/>}/>
        </Routes>
    </Layout>
  );
}

export default App;