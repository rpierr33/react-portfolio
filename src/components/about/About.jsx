import "./about.css";
import anime from "../../images/anime.png";
import ralph2 from "../../images/ralph-sits-on-ramp.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={ralph2} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub p1">
          I am a web developer who understands and knows there's always
          something more to learn! I have a working knowledge of JavaScript,
          JQuery, Node.js, Express.js, Sequelize.js, OOP, React.js, CSS, MySql,
          PostgreSql, MongoDB, Mongoose, GraphQL, and Redux.<br></br>
          <br></br>I currently work as an instructor/tutor/grader for a full
          stack web development bootcamp at the University of Miami, through 2U.{" "}
          <br></br>
          <br></br>
          My FreeLance work focuses primarily on open source projects and
          e-commerce websites.
        </p>

        <p className="a-sub p2">
          When my friends have questions about the technology they're using, I
          am the go-to guy. Why? Either I'm already familiar or I can find the
          answer. Most importantly, I can talk to them in a way that makes them
          understand what is going on, I can be your go-to as well!
        </p>
        <div className="a-award">
          <img src={anime} alt="" className="a-award-img" />
        </div>
      </div>
    </div>
  );
};

export default About;
