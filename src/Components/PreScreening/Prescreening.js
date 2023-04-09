import React, {useState} from "react";
import "./PreScreening.css";
import SymptomList from "./SymptomList/SymptomList";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBuilding} from "@fortawesome/free-solid-svg-icons";
import {FormGroup, FormLabel} from "react-bootstrap";


function PreScreening(props) {
    const questions =[
        {
            question: "How old are you?",
            options: ["symptom1", "symptom2"]
        },
        {
            question: "Are you sexually active?",
            options: ["Yes", "No", "Prefer not to say"]
        },
        {
            question: "Do you have any of the following symptoms?",
            options: ["symptom1", "symptom2"]
        }
    ]

    const [symptom, setSymptom] = useState([<SymptomList key={0}/>])
    let handleAddSymptom = (e) => {
        e.preventDefault()
        setSymptom([...symptom,<SymptomList key={symptom.length}/>]);
    }

    return (props.trigger) ? (
        <div className="pre-screening-container">
            <div className="pre-screening">
                <div className="pre-screening-inner">
                    <div className="pre-screening-header">
                        <div style={{
                            width:"60px",
                            height:"60px",
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center",
                            border: "1.52035px solid #E4E7EC",
                            boxShadow: "0px 1.52035px 3.0407px rgba(16, 24, 40, 0.05)",
                            borderRadius: "15.2035px",
                            marginRight:"24px"}}>
                            <FontAwesomeIcon icon={faBuilding} style={{height:"30px", width:"auto"}}/>
                        </div>
                        <h1>Add your current health condition</h1>
                        <div className="close-btn" onClick={() => props.setTrigger(false)}>x</div>
                    </div>
                    <div className="divider" />
                    <div className="pre-screening-body">
                        <div className="upper">
                            {questions.map((item, index) => (
                                <FormGroup className="form-group">
                                    <FormLabel className="form-label">{item.question}</FormLabel>
                                    <select name="" id="">
                                        {item.options.map((option) => (
                                            <option>{option}</option>
                                        ))}
                                    </select>
                                </FormGroup>
                            ))}
                        </div>
                        <div className="divider" />
                        <div className="lower">
                            {symptom}
                            <div onClick={handleAddSymptom} style={{textAlign:"left", marginTop:"10px", cursor:"pointer"}}>+ Add more symptoms...</div>
                        </div>
                        <div className="divider" />
                    </div>
                    <div className="pre-screening-footer">
                        <button style={{background:"#fff", color:"#000"}} onClick={() => props.setTrigger(false)}>Cancel</button>
                        <button style={{background:"#01C1A0", color:"#fff", borderColor:"#01C1A0"}}>Confirm</button>
                    </div>
                </div>
            </div>
        </div>
    ) : "";
    }

export default PreScreening;