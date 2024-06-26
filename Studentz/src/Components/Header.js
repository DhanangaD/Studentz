import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a style={{color:"red"}} className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            {/* <a className="nav-link active" aria-current="page" href="/">
              Home
            </a> */}
            {/* <a className="nav-link" href="/add">
              Create Student
            </a> */}
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/add" className="nav-link">Create Student</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
