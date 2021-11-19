import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
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

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            

            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Nav!
        </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link class="dropdown-item" to="/"> Intro </Link>
                <Link class="dropdown-item" to="/about"> About </Link>
                <Link class="dropdown-item" to="/ProductList"> Product List </Link>
                <Link class="dropdown-item" to="/contact"> Contact </Link>
                <Link class="dropdown-item" to="/resume"> Resume </Link>
                <Link class="dropdown-item" to="/toggle"> Toggle </Link>

              </div>
            </li>


            
          </ul>
        </div>
      </nav>
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/About" element={<About />} />
          <Route path="/ProductList" element={<ProductList />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/toggle" element={<Toggle />} />


        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;