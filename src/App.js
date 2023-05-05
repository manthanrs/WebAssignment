import React from "react"
import "./index.css"
import Events from "./routes/Events";
import Blog from "./routes/Blog";
import Home from "./routes/Home";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element= {<Home/>} />
      <Route path="/Events" element= {<Events/>} />
      <Route path="/Blog" element= {<Blog/>} />
    </Routes>
    </>
  );
}

export default App;
