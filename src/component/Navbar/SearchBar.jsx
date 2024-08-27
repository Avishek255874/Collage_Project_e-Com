import React from 'react'


const SearchBar = () => {
  return (
    <div className="input-group  ">
    <button className="btn btn-outline-secondary bg-slate-400 text-light dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">All</button>
    <ul className="dropdown-menu">
      <li><a className="dropdown-item" href="#">All Categories</a></li>
      <li><a className="dropdown-item" href="#">Alexa Skills</a></li>
      <li><a className="dropdown-item" href="#">Amazon Devices</a></li>
      <li><a className="dropdown-item" href="#">Amazon Devices</a></li>
      <li><a className="dropdown-item" href="#">Amazon Fresh Meat</a></li>
      <li><a className="dropdown-item" href="#">Amazon Pharmacy</a></li>
      <li><a className="dropdown-item" href="#">Appliances</a></li>
      <li><a className="dropdown-item" href="#">Apps & Games</a></li>
      <li><a className="dropdown-item" href="#">Audible Audiobook</a></li>
      <li><a className="dropdown-item" href="#">Baby</a></li>
      <li><a className="dropdown-item" href="#">Beauty</a></li>
      <li><a className="dropdown-item" href="#">Clothing & Accessories</a></li>
      
      <li><hr className="dropdown-divider"/></li>
      <li><a className="dropdown-item" href="#">Amazon Fresh</a></li>
    </ul>
    <input type="text" className="form-control " placeholder='Search Amazon.in' aria-label="Text input with dropdown button"/>
    <div className='btn btn-warning'><i class="fa-solid fa-magnifying-glass"/></div>
  </div>
  
  )
}

export default SearchBar