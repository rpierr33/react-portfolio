import React from 'react';
import ProjectList from '../projectList'


const Project = ({}) => {
  return (
    <div className="flex-row px-1">
        <h2> My Latest Projects! </h2>
        <div >
          <ProjectList></ProjectList>
        </div>  
    </div>
  );
};

export default Project;