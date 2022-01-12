import "./projectList.css";
import Project from "../project/Project";
import { projects } from "../../data";

const ProjectList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">My Developer Trek Thus Far!</h1>
        <p className="pl-desc">
          Please browse through my list of previous projects, from basic html & css to full stack with sequelize, nodejs, mongodb, & a whole lot more to come.
        </p>
      </div>
      <div className="pl-list">
        {projects.map((item) => (
          <Project key={item.id} img={item.img} link={item.link} />
          
        ))}
      </div>
    </div>
  );
};

export default ProjectList;