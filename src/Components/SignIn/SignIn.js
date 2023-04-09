import React from "react";

import "./SignIn.css";
import {FormGroup, FormLabel} from "react-bootstrap";
import Form from "react-bootstrap/Form";

function SignIn(props) {
    return (props.trigger) ? (
        <div className="sign-in-container">
            <div className="sign-in">
                <div className="sign-in-inner">
                    <div className="sign-in-header">
                        <div className="left">
                            <h3 style={{color:"#757575", margin:"0", marginBottom:"5px", fontWeight:"400"}}>Welcome back!</h3>
                            <h1 style={{margin:"0", marginBottom:"25px", fontWeight:"600"}}>Login to your account</h1>
                        </div>
                        <div className="close-btn" onClick={() => props.setTrigger(false)} style={{cursor:"pointer", fontSize:"30px", color:"#667085"}}>x</div>
                    </div>
                    <div className="sign-in-body">
                        <FormGroup className="form-group">
                            <FormLabel className="form-label">Email Address</FormLabel>
                            <Form.Control rows={3} placeholder="Enter your email" type="email"
                            />
                        </FormGroup>
                        <FormGroup className="form-group">
                            <FormLabel className="form-label">Password</FormLabel>
                            <Form.Control rows={3} placeholder="Enter your password" type="password"
                            />
                        </FormGroup>
                        <div className="sign-in-btn">LOGIN</div>
                        <div style={{display:"flex", justifyContent:"space-between"}}>
                            <a href="#">Forget Password?</a>
                            <a href="#">Don't have an account? Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : "";
}

export default SignIn;