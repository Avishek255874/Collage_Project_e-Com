import React from "react";

const SignIn = () => {
  return (
    <div>
      <p>Hello,Sign in </p>
      <div class="dropdown">
        <button
          class="  dropdown-toggle text-lime-50 fw-bold"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Account & Lists
        </button>
        <ul class="dropdown-menu w-96 p-1 ">
          <div className="border-b flex justify-center ">
            <div className="pb-2">
              <div className="d-grid  btn btn-warning">Sign in</div>

              <p>
                New Costumer?
                <a className=" text-blue-700" href="...">
                  Start here..
                </a>
              </p>
            </div>
          </div>
          <div className="p-2  flex justify-between ">
            <div className="">
              <h4 className="fw-bold">Your Lists</h4>
              <ul>
                <li className="list-group-item">Create a Wish List</li>
                <li className="list-group-item">Wish from Any Website</li>
                <li className="list-group-item">Baby Wishlist</li>
                <li className="list-group-item">Discover Your Style</li>
                <li className="list-group-item">Explore Showroom</li>
              </ul>
            </div>
            <div className="">
            
            <div className="border-l ps-3">
            <h4 className="fw-bold">Your Account</h4>
            <ul>
              <li className="list-group-item">Your Account</li>
              <li className="list-group-item">Your Orders</li>
              <li className="list-group-item">Your Wish List</li>
              <li className="list-group-item">Your Recommendations</li>
              <li className="list-group-item">Your Prime Membership</li>
              <li className="list-group-item">Your Prime Video</li>
              <li className="list-group-item">Memberships & Subscriptions</li>
              <li className="list-group-item">Your Seller Accounts</li>
              <li className="list-group-item">Manage Your Content and Devices</li>
            </ul>
          </div>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default SignIn;
