import React from "react";
import {FormGroup, FormLabel} from "react-bootstrap";

function SymptomList() {

    const symptoms = ["symptom1", "symptom2"]

    return (
        <div>
            <FormGroup className="form-group">
                <FormLabel className="form-label">Symptom</FormLabel>
                <select name="" id="">
                    {symptoms.map((option) => (
                        <option>{option}</option>
                    ))}
                </select>
            </FormGroup>
        </div>
    )
}

export default SymptomList;