import React from "react";
import Card from "./Card";
import data from "./data";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Service = () =>{
    return(
        <>
            <div className="my-4">
                <h1 className="text-center">Services</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {
                                data.map((val, ind)=> {
                                    return <Card key={ind} 
                                    img = {val.img}
                                    title = {val.title}
                                    para = {val.para} 
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

export default Service