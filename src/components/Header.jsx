import React from "react";
import { NavLink } from "react-router-dom";
import CartBtn from "./buttons/CartBtn";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/authActions";
const Header = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.userData);

  const handleLogout = () => {
    dispatch(logout);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid py-2">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <NavLink className="navbar-brand shop fw-bold" to="/">
              {" "}
              ALL IN ONE SHOP       
            </NavLink>
            {/* <p className="font-weight-bold text-center">Welcome {userData.userName}</p>   */}
            <button
              className="btn btn-outline-primary ms-2"
              onClick={handleLogout}
            >
              Logout
            </button>
            <CartBtn />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
