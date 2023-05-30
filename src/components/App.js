import React from "react";
import Home from "./Home"
import About from "./About"
import Links from "./Links"


function App() {
  const user = {
    username: "ken",
    city: "nairobi"
  };

  const bio = "I created this";

  const github = "https://github.com/liza";
  const linkedin = "https://www.linkedin.com/in/liza/";

  return (
    <div>
      <Home user={user} />
      <About bio={bio} github={github} linkedin={linkedin} />
      <Links />
    </div>
  );
}

export default App;
