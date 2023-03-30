import React from "react";
import "./Footer.css";
import logo from "../../resources/logo.png";

function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="column1" style={{width:"20%"}}>
                    <img src={logo} alt=""/>
                    <p>
                        Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque
                        laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis i architecto.
                    </p>

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
                        <li><img src="" alt=""/></li>
                        <li><img src="" alt=""/></li>
                        <li><img src="" alt=""/></li>
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
        </div>
    )
}

export default Footer;