import React from "react";
import emailjs from "emailjs-com";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Contact = () =>{

    function formSubmit(e){
        e.preventDefault();
        emailjs.sendForm(
            "service_cyc30ll", 
            "template_yoz5e5q",
            e.target, 
            "user_NkyFK6nKkCL7TECRe4Xq0"
        ).then(res=>{
            window.location.reload();
        }).catch(err=>console.log(err));
    }
    
    return(
        <>
            <div className="my-5">
                <h1 className="text-center">Contact</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Name</label>
                                <input type="text" className="form-control" name="name" placeholder="Enter your full name"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email id</label>
                                <input type="email" className="form-control" name="email" placeholder="Enter your email id"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className="form-control" name="message" rows="3" ></textarea>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-outline-primary" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;