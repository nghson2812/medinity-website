import React from "react";
import "./LandingPage.css";
import bannerImg from "../../resources/banner_img.png";
import logo from "../../resources/logo.png";
import chatbot_icon from "../../resources/chatbot_icon.png";
import symptom_checker_icon from "../../resources/symptom_checker_icon.png";
import contact_us_img from "../../resources/contact_us_img.png";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import SwiperCore, {Autoplay, Navigation, Pagination} from "swiper";
import Form from "react-bootstrap/Form";
import {FormGroup} from "react-bootstrap";
import PreScreening from "../../Components/PreScreening/Prescreening";
import SignIn from "../../Components/SignIn/SignIn";

function LandingPage() {
    SwiperCore.use([Autoplay]);

    const [buttonPopUp, setButtonPopUp] = React.useState(false);

    const feedback = [
        {
            image: require("../../resources/gai-xinh1 Small.jpeg"),
            name: "Hanh Trang",
            feedback: "Hiểu ngay vấn đề",
            occupation: "Gai Xinh"
        },
        {
            image: require("../../resources/gai-xinh2 Small.jpeg"),
            name: "Hanh Trang",
            feedback: "Như zái",
            occupation: "Gai Xinh"
        },
        {
            image: require("../../resources/gai-xinh3 Small.jpeg"),
            name: "Hanh Trang",
            feedback: "Ngol",
            occupation: "Gai Xinh"
        },
        {
            image: require("../../resources/gai-xinh4 Small.jpeg"),
            name: "Hanh Trang",
            feedback: "Quá phê",
            occupation: "Gai Xinh"
        },
        {
            image: require("../../resources/gai-xinh5 Small.jpeg"),
            name: "Hanh Trang",
            feedback: "Bú",
            occupation: "Gai Xinh"
        }
    ];
    return (
    <div style={{marginTop:"60px", marginBottom:"243px"}}>
        <div className="section1">
          <div className="left-section">
              <h1>Symptom Diagnosis System</h1>
              <p>Simplifying day-to-day Habit with an easy-to-use software,
                  you can easily get the analysis for your health condition based on some basic data</p>
              <div className="btn"><a href="#">GET STARTED NOW</a></div>
          </div>
          <div className="right-section" style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
              <img style={{width:"100%", height:"auto"}} src={bannerImg} alt=""/>
          </div>
        </div>

        <div className="section2" id="section">
          <div className="heading">
              <h1>What Are Medinity System's Functions?</h1>
              <p>Our solution provides the easiest way for anyone to refer to their health condition</p>
          </div>
          <div className="content">
              <div className="upper">
                  <div className="symptom-checker">
                      <img src={symptom_checker_icon} alt=""/>
                      <h3>Symptom</h3>
                      <h3>Checker</h3>
                      <div className="try-now-btn" onClick={() => setButtonPopUp(true)}>Try Now
                          <span></span><span></span><span></span><span></span>
                      </div>
                  </div>
                  <div className="vertical-line"
                       style={{
                           width: "285.7px",
                           height: "0px",
                           border: "1.5037px solid rgba(21, 39, 70, 0.21)",
                           transform: "rotate(-90deg)"}} />
                  <div className="chat-bot">
                      <img src={chatbot_icon} alt=""/>
                      <h3>Medical Assistant</h3>
                      <h3>(Chat Bot)</h3>
                      <div className="try-now-btn">Try Now
                          <span></span><span></span><span></span><span></span>
                      </div>
                  </div>
              </div>
              <div className="lower">
                  <div className="horizontal-line"
                       style={{
                           width: "285.7px",
                           height: "0px",
                           border: "1.5037px solid rgba(21, 39, 70, 0.21)"}}/>
                  <img src={logo} alt=""/>
                  <div className="horizontal-line"
                       style={{
                           width: "285.7px",
                           height: "0px",
                           border: "1.5037px solid rgba(21, 39, 70, 0.21)"}}/>
              </div>
          </div>
        </div>
        <div className="section4" id="section">
            <div className="heading">
                <h1>What They Say About Us</h1>
            </div>
            <Swiper
                slidesPerView={1}
                spaceBetween={5}
                centeredSlides={true}
                speed={700}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{clickable: true}}
                navigation={true}
                autoplay={{ delay: 2000 }}
                modules={[Pagination, Navigation]}
                slideToClickedSlide={true}
                className="sample-slider"
            >
                <div className="swiper-wrapper">
                    {feedback.map((item, index) => (
                        <SwiperSlide>
                            <div className="swiper-container" style={{transition:"linear"}}>
                                <div><img src={item.image} alt="" style={{borderStyle:"solid", borderWidth:"medium"}}/></div>
                                <div className="text">
                                    <p style={{fontSize:"17.5px"}}>{item.feedback}</p>
                                    <p style={{fontSize:"21px", fontWeight:"800",margin:"0"}}>{item.name}</p>
                                    <p style={{color:"#01C1A0", margin:"0"}}>{item.occupation}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
        </div>

        <div className="section5" id="section">
            <div className="left-section" style={{width:"50%"}}>
                <img style={{width:"90%", height:"auto"}} src={contact_us_img} alt=""/>
            </div>
            <div className="right-section" style={{width:"40%"}}>
                <h1>Contact Us</h1>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                <div className="input" style={{width:"100%"}}>
                    <form>
                        <FormGroup className="form-group">
                            <Form.Control placeholder="First Name"/>
                        </FormGroup>
                        <FormGroup className="form-group">
                            <Form.Control placeholder="Last Name"/>
                        </FormGroup>
                    </form>
                    <form>
                        <FormGroup className="form-group">
                            <Form.Control placeholder="Phone"/>
                        </FormGroup>
                        <FormGroup className="form-group">
                            <Form.Control placeholder="Email"/>
                        </FormGroup>
                    </form>
                    <form>
                        <FormGroup className="form-group" style={{width:"100%", display:"flex"}}>
                            <Form.Control as="textarea" rows={3} placeholder="Message"
                                          style={{resize:"none", maxHeight:"141px", minHeight:"141px", fontSize:"16px"}}
                            />
                        </FormGroup>
                    </form>
                </div>
                <button><a href="#">Submit</a></button>
            </div>
        </div>
        <PreScreening trigger={buttonPopUp} setTrigger={setButtonPopUp}/>
    </div>
    );
}

export default LandingPage;