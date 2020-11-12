import React, { Component } from "react";
import "bootswatch/dist/journal/bootstrap.min.css"; // Added this :boom:
import "./index.css";

class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="headerDiv row">
          <div className="metIcon col">
            <img
              src="https://asmtdemo.ibridgellc.com/assets/images/logo/1601228410_Metolius_Logo2.png"
              alt="Metolius Logo"
            />
          </div>
          <div className="userIcon ">
            <img
              src="https://asmtdemo.ibridgellc.com/temp/add-user.png"
              alt="UserIcon"
              width="25%"
            />
            <span className=" spanDiv">&#9776;</span>
          </div>
          <div></div>
        </div>
        <nav
          id="navbar"
          className="navbar navbar-expand-lg navbar-dark bg-primary"
        >
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">
                  Home
                  <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Features
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  About
                </a>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="true"
                >
                  Dropdown
                </a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">
                    Separated link
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
