import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-row w-full justify-between py-5 px-10 font-semibold shadow-lg ">
      <h2 className="">Name</h2>
      <div className="flex flex-row gap-8 font-semibold ">
        <a href="#">Home</a>
        <a href="#">Summary</a>
        <a href="#">Project</a>
        <a href="#">Education</a>
      </div>
    </div>
  );
};

export default Navbar;
