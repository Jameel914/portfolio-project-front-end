import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  function handleNewItembutton() {
    navigate(`/foods/new`);
  }
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div
        className="container-fluid"
        style={{ backgroundColor: "lightgreen" }}
      >
        <a className="navbar-brand fw-bold fs-1 py-3" href="/">
          <span style={{ color: "red", fontSize: "50px" }}>S</span>PICE AVENUE
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
          <div className="navbar-nav px-5">
            <a
              className="nav-link active px-5 fs-2"
              aria-current="page"
              href={"/"}
            >
              Home
            </a>
            <a className="nav-link active px-5 fs-2" href={"/about"}>
              About
            </a>
            <a className="nav-link active px-5 fs-2" href={"/contact"}>
              Contact Us
            </a>
          </div>
          <div className="ms-auto">
            <button
              type="button"
              className="btn btn-secondary px-2"
              onClick={handleNewItembutton}
              style={{
                color: "black",
                backgroundColor: "green",
                border: "1px solid green",
              }}
            >
              ADD NEW ITEM
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
