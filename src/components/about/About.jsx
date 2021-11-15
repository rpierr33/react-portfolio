import "./about.css";
import anime from "../../img/anime.png";
import ralph2 from "../../img/ralph-leans-against-window.jpg";

const About = () => {
    return (
        <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
        <img
            src={ralph2} alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
      <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        I work as a FreeLancer, primarily on open source software and e-commerce websites. 
        I have experience in full stack web development, content creation, and writing.
        </p>
        <p className="a-sub"> I'm always interested in learning about new designer/
        developer or designer roles, possibly even hybrid roles. I'm very familiar 
        with JavaScript and the JS web stack (Node, express, React/Redux).</p>

        <p className="a-desc">This website was built with JS, CSS, React, and NodeJS.</p>
        <div className="a-award">
          <img src={anime} alt="" className="a-award-img" />
          {}
        </div>
      </div>
    </div>
  );
};    
    
export default About