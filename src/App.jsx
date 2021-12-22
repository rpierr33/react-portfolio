import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProjectList from "./components/projectList/ProjectList";
import Resume from "./components/resume/Resume";

import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Link
} from "react-router-dom";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      
      <BrowserRouter>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            

            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Menu
        </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/"> Intro </Link>
                <Link className="dropdown-item" to="/about"> About </Link>
                <Link className="dropdown-item" to="/projectList"> Projects </Link>
                <Link className="dropdown-item" to="/contact"> Contact </Link>
                <Link className="dropdown-item" to="/resume"> Resume </Link>
                <Link className="dropdown-item" to="/toggle"> Toggle </Link>

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
          <Route path="/toggle" element={<Toggle />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;