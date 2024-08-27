import React from "react";
import flag from "../../assets/indianflag.jpg";

const Language = () => {
  return (
    <div className="flex">
      <img src={flag} alt="flag" width="30px" height="20px" />
      <div className="dropdown">
      <button className=" dropdown-toggle " type="button" data-bs-toggle="dropdown" >
        EN
      </button>
      <ul className="dropdown-menu p-3 w-72">
   
<div class="form-check pb-2">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <label class="form-check-label" for="flexRadioDefault2">
    English
  </label>
</div>  

<hr/>

  <div class="form-check pt-1">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
Hindi - HI - अनुवाद
  </label>
</div>
<div class="form-check pt-1">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
  বাংলা - BN - অনুবাদ
  </label>
</div>
  <div class="form-check pt-1">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
  मराठी - MR - भाषांतर
  </label>
</div>
  <div class="form-check pt-1">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
  ಕನ್ನಡ - KN - ಭಾಷಾಂತರ
  </label>
</div>
  <div class="form-check pt-1">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
  മലയാളം - ML - വിവർത്തനം
  </label>
</div>
  
     
     
      </ul>
    </div>
    </div>
  );
};

export default Language;
