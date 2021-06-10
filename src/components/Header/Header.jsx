import React from "react";
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="valHeader">
      <div className="valHighNav">
        <div className="container">High nav</div>
      </div>
      <div className="valHeader_title">
        <div className="container">
          <h1>React Lite Level</h1>
        </div>
      </div>
      <Nav />
    </header>
  );
};

export default Header;
