import React from "react";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid" style={{ backgroundColor: "lightgreen" }}>
        <a class="navbar-brand fw-bold fs-1 py-3" href="/">
          <span style={{ color: "red", fontSize: "50px" }}>S</span>PICE AVENUE
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav px-5">
            <a class="nav-link active px-5 fs-2" aria-current="page" href={"/"}>
              Home
            </a>
            <a class="nav-link active px-5 fs-2" href={"/about"}>
              About
            </a>
            <a class="nav-link active px-5 fs-2" href={"/contact"}>
              Contact Us
            </a>
          </div>
          <div className="ms-auto">
            <button
              type="button"
              className="btn btn-secondary px-2 fw-bold"
              style={{
                color: "black",
                backgroundColor: "lightgreen",
                border: "1px solid red",
              }}
            >
              Add New Item
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
