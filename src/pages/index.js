import React from "react";
import { Link } from "react-router-dom";
import "./pages.css";

const Home = () => {
  return (
    <div className="div-main">
      <div className="div-content">
        <h1>SpellHive</h1>
        <p>
          Welcome to SpellHive, the place where you can buzz your spelling
          skills to perfection! <br />
          <br /> SpellHive is a fun and interactive website created specially
          for children in Years 1 through 6, to help them practice their
          spelling of common exception words. With SpellHive, you can gain
          confidence in your spelling skills in no time!
        </p>
        <br />
        <p>
          For help and information on how to use this website, click the{" "}
          <strong>ⓘ</strong> icon in the top left corner.
        </p>
        <br />
        <p>Start your spelling practice by chosing the year group below.</p>
        <div className="years-links">
          <Link to="./year1">Year 1</Link>
          <Link to="./year2">Year 2</Link>
          <Link to="./year34">Year 3/4</Link>
          <Link to="./year56">Year 5/6</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
