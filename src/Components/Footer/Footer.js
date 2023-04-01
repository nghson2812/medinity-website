import React from "react";
import "./Footer.css";
import logo_1 from "../../resources/logo-1.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLocationDot, faGlobe, faPhone} from "@fortawesome/free-solid-svg-icons";
import {SocialIcon} from "react-social-icons";
import logo from "../../resources/logo.png";


function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="upper">
                    <div className="column1" style={{width:"25%"}}>
                        <div id="logo">
                            <img src={logo} alt="" style={{alignSelf:"center"}}/>
                            <h1>MEDINITY</h1>
                        </div>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis i architecto.
                        </p>
                        <div style={{display:"flex", flexDirection:"row", gap:"10px", marginTop:"20px"}}>
                            <a href="#"><SocialIcon network="facebook" bgColor="#152746" style={{height:"28px", width:"28px"}}/></a>
                            <a href="#"><SocialIcon network="instagram" bgColor="#152746" style={{height:"28px", width:"28px"}}/></a>
                            <a href="#"><SocialIcon network="linkedin" bgColor="#152746" style={{height:"28px", width:"28px"}}/></a>
                        </div>
                    </div>
                    <div className="column2">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div className="column3">
                        <h4>Contact Us</h4>
                        <ul>
                            <li><FontAwesomeIcon icon={faLocationDot}/><p href="#">VinUni, Hanoi, Vietnam</p></li>
                            <li><FontAwesomeIcon icon={faGlobe}/><p href="#">www.medinity.com</p></li>
                            <li><FontAwesomeIcon icon={faPhone}/><p href="#">xxx-xxxxxxx</p></li>
                        </ul>
                    </div>
                    <div className="column4">
                        <h4>Other Links</h4>
                        <ul>
                            <li><a href="#">FAQs</a></li>
                            <li><a href="#">Email Us</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className="lower">
                    <div className="line"></div>
                    <div style={{display: "flex", alignItems:"center"}}>
                        <p style={{marginRight:"auto"}}>Copyright© 2023 Medinity</p>
                        <div style={{}}><a href="#">Terms and Conditions</a>  | <a href="#">Privacy Policy</a></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;