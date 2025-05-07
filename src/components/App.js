// App.js
import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./../styles/App.css"; // Make sure this file exists

const Header = () => {
  return (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </BrowserRouter>
);


const Home = () => {
  return (
    <h1>Welcome to my website!</h1>
  );
};

const About = () => {
  return (
    <h1>This is a sample React Router program.</h1>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
