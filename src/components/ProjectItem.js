import React from "react";

const ProjectItem = (props) => {
    const { technologies } = props;
    const technology = [React, redux, javascript];

    return (
        <div>
            {technologies.map((technology, index) => (
                <span key={index}>{technology.name}</span>
            ))}
        </div>
    )
}

export default ProjectItem;
