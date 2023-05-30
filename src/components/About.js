import React from "react";


  const About = (props) => {
    const { bio } = props;
  
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{bio}</p>
    </div>
  );
  };

export default About;
