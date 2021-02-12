import React from "react";
import { Form, Button } from "react-bootstrap";
import "./style.css";
const CityInput = ({ city, setCity, fetchCityWeather }) => {
  const handleInputChange = (e) => {
    setCity(e.target.value);
  };
  const [error, setError] = React.useState("");
  const handleSubmit = () => {
    if (!city) {
      setError("City Field is empty!!");
    } else {
      fetchCityWeather();
    }
  };
  return (
    <Form className="form1">
      <Form.Group controlId="formBasicEmail">
        <Form.Label className="cityname">Enter City Name :</Form.Label>
        <Form.Control
          type="text"
          placeholder="City(eg : darbhanga)"
          id="input"
          value={city}
          onChange={handleInputChange}
        />
      </Form.Group>
      <p className="text-danger">{error}</p>
      <div>
        <Button className="button1" variant="info" onClick={handleSubmit}>
          Check
        </Button>
      </div>
    </Form>
  );
};

export default CityInput;
