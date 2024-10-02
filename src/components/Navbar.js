import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="#">
          {props.title}
        </Link>
        {/* <img src="https://cdn.pixabay.com/photo/2015/11/06/12/42/t-1027215_960_720.jpg" alt="L" width="30" height="24" className="d-inline-block align-text-top"/>{props.title}</a> */}
        <button className="navbar-toggler" type="button">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Contact
              </Link>
            </li> */}
          </ul>
          <div class={`form-check form-switch text-${props.mode==="light"?"dark":"light"}`}>
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.togglemode}
            />
            <label class="form-check-label" for="flexSwitchCheckDefault" >
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

//proptypes addition

Navbar.propTypes = {
  title: PropTypes.string, //title should beof string type and if mandatory banana ho so add title:PropTypes.string.isRequired
};

//default prototypes value

Navbar.defaultProps = {
  title: "Enter Text Here",
};
