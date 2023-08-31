import React from "react";
import Nav from "./nav/Nav";


const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full py-4">
      <div className="container mx-auto" >
        <Nav/>
      </div>
    </header>
  );
};

export default Header;
