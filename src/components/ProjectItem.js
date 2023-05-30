import React from "react";

const ProjectItem = (props) => {
    const { technologies } = props;

    return (
        <div>
            {technologies.map((technology, index) => (
                <span key={index}>{technology.name}</span>
            ))}
        </div>
    )
}

export default ProjectItem;
