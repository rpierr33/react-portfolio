import "./intro.css";
import ralph from "../../images/ralph-at-table.jpg";
import Typical from "react-typical";

const steps = [
  `Hello, thanks for coming by`,
  1000,
  `I'm Ralph`,
  1000,
  `I am a Full Stack Developer, specializing in the MERN stack, as well as relational databases such as MySQL`,
  1000,
  `Checkout my projects using the link in the menu.`,
  2000,
  `Never Hesitate To Reach Out!`,
  10000,
];

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <Typical
            wrapper="span"
            steps={steps}
            loop={Infinity}
            className={"intro"}
          />
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={ralph} className="i-img" alt="" />
      </div>
    </div>
  );
};

export default Intro;
