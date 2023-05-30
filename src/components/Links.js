import React from "react"

    const Links = (props) => {
        const { github, linkedin } = props;
    

    return (
        <div>
            <h3>Links</h3>
            <ul> 
            <li><a href={github}>Github</a></li>
            <li><a href={linkedin}>linkedin</a></li>
            </ul>
           
        </div>
    );
    };

export default Links;