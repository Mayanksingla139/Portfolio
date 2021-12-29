import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Card = (props) =>{
    return (
        <>
            <div className="card col-md-3 mx-5" style={{width: "18rem"}}>
            <img className="card-img-top" src={props.img} alt="Card"/>
                <div className="card-body">
                    <h3 className="card-title">{props.title}</h3>
                    <p className="card-text">{props.para}</p>
                </div>
            </div>
        </>
    )
}

export default Card