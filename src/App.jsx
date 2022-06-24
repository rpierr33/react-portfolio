import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProjectList from "./components/projectList/ProjectList";
import Resume from "./components/resume/Resume";
import React from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <nav
          className="navbar navbar-expand-lg navbar-light bg-dark"
          style={{ color: "rgb(103, 103, 152)" }}
        >
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{ color: "rgb(86, 120, 214)" }}
                >
                  Menu
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link
                    className="dropdown-item"
                    to="/"
                    style={{ color: "rgb(86, 120, 214)" }}
                  >
                    {" "}
                    Intro{" "}
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/about"
                    style={{ color: "rgb(86, 120, 214)" }}
                  >
                    {" "}
                    About{" "}
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/projectList"
                    style={{ color: "rgb(86, 120, 214)" }}
                  >
                    {" "}
                    Projects{" "}
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/contact"
                    style={{ color: "rgb(86, 120, 214)" }}
                  >
                    {" "}
                    Contact{" "}
                  </Link>
                  <Link
                    className="dropdown-item"
                    to="/resume"
                    style={{ color: "rgb(86, 120, 214)" }}
                  >
                    {" "}
                    Resume{" "}
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/About" element={<About />} />
          <Route path="/ProjectList" element={<ProjectList />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
