import React from 'react';
import {Form} from "react-bootstrap";
import {Button} from "react-bootstrap";
import "./style.css";
const CityInput = ({city,setCity,fetchCityWeather}) => {
    
    const [error,setError] = React.useState("");
   
    const handleInputChange =(e)=>{
        setCity(e.target.value);
    };

    const handleSubmit = () =>{
        if(!city) {
            setError("City field is empty");
        }
        else {
            setError("");
           
            fetchCityWeather();
        }
    };
    return (
        <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>City</Form.Label>
          <Form.Control 
          value={city} type="text" placeholder="Enter city name"
          onChange={handleInputChange} 
          />
          <p className="text-danger">{error}</p>
        </Form.Group>

        <Button variant="primary" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    );
};

export default CityInput;