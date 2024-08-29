import React from "react";
import fresh from "../../assets/freah.png";
import freshmeat from "../../assets/freah_meat.png";

const Fresh = () => {
  return (
    <div>
      <div class="dropdown ">
        <button
          className="  dropdown-toggle text-lime-50 fw-bold"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Fresh
        </button>
        <ul className="dropdown-menu p-2 ">
          <p className="fw-bold">Shop groceries</p>
          <br/>
          <div className=" flex justify-around items-center gap-2 pb-3">
            <div className=" w-36 h-36 p-3 bg-slate-200  flex justify-center items-center">
              <img src={fresh} alt="fresh" />
            </div>
            <div className="w-36 h-36 bg-slate-200 p-4  flex justify-center items-center">
              <img src={freshmeat} alt="freshmeat" />
            </div>
          </div>
          <hr/>
          <a className="pT-2 " href="...." target="...">  Shop all groceries on Amazon</a>
        </ul>
       
      </div>
      
    </div>
  );
};

export default Fresh;
