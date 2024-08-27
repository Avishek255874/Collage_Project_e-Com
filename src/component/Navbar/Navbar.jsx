import React from "react";
import logo from "../../assets/amalogo.png";
import "./Navbar.css";
import SearchBar from "./SearchBar";
import Language from "./Language";

const Navbar = () => {
  return (
    <div className="Navbar  d-flex   p-2 bg-black text-light ">
      <div className="col-md-1 p-2   ">
        <img src={logo} alt="logo" width="100px" height="40px" />
      </div>
      <div className="col-md-2 flex  gap-1 ">
        <div className=" p-2 ">
          <i className="fa-solid fa-location-dot text-light " />
        </div>
        <div className="">
          <p className="">Delivered to Kolkata-70063</p>
          <p className="m-0 fw-bold">Update Location</p>
        </div>
      </div>
      <div className="col-md-5 p-2">
      <SearchBar />
      
      </div>
      <div className="col-md-1  flex justify-center items-center">
      <Language/>
      </div>
      <div className="col-md-1  border border-light">f</div>
      <div className="col-md-1  border border-light">f</div>
      <div className="col-md-1  border border-light ">f</div>
    </div>
  );
};

export default Navbar;
