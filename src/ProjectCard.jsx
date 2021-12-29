import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const ProjectCard = (props) =>{
    return(
    <>
        <div className="card col-md-3 mx-5" style={{width: "18rem"}}>
            <img src={props.img} className="card-img-top" alt="Music Kit"/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.paragraph}</p>
                <a href={props.src} className="btn btn-primary">Live Demo</a>
            </div>
        </div>
    </>
    )
}

export default ProjectCard