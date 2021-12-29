import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectData from "./projectData.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./index.css";

const Project = () =>{
    return(
        <>
            <div className="my-4">
                <h1 className="text-center">Projects</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-3">
                            {
                                ProjectData.map((val, ind)=>{
                                    return <ProjectCard key={ind}
                                    img = {val.img}
                                    title = {val.title}
                                    paragraph = {val.paragraph}
                                    src = {val.src}
                                    />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Project