import React, { useState } from "react";

const Home = ({ fetchData }) => {
  const [activeGenre, setActiveGenre] = useState(null);

  const handleFetchData = (genre) => {
    setActiveGenre(genre);
    fetchData(genre);
  };

  return (
    <div className="search">
      <h1>
        “It's funny how the colors of the real world only seem really real when you watch them on a screen.”
        ― anthony burgess
      </h1>
      <div className="main">
        <h1>Search Movies By Genre</h1>
      </div>
      <div className="buttons">
        <button className={activeGenre === "drama" ? "active" : ""} onClick={() => handleFetchData("drama")}>Drama</button>
        <button className={activeGenre === "animation" ? "active" : ""} onClick={() => handleFetchData("animation")}>Animation</button>
        <button className={activeGenre === "mystery" ? "active" : ""} onClick={() => handleFetchData("mystery")}>Mystery</button>
        <button className={activeGenre === "horror" ? "active" : ""} onClick={() => handleFetchData("horror")}>Horror</button>
        <button className={activeGenre === "comedy" ? "active" : ""} onClick={() => handleFetchData("comedy")}>Comedy</button>
        <button className={activeGenre === "western" ? "active" : ""} onClick={() => handleFetchData("western")}>Western</button>
      </div>
    </div>
  );
};

export default Home;
