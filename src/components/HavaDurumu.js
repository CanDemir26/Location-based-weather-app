import { Card } from "react-bootstrap";

const HavaDurumu = (props) => {
    const { weather } = props;
  
    if (!weather) {
      return <p>
  You need to allow location access......</p>;
    }
  
    return (

<Card style={{ width: '18rem' }} className='m-auto mt-5 column d-flex align-items-center align-items-center shadow-lg '>
  <Card.Body className="justify-content-center">
    <Card.Header className="bg-primary text-white text-center rounded-bottom">{weather.name}</Card.Header>
    <Card.Text className="text-center">
    <h4 className="mt-3">{weather.weather.map((data) => data.description).join(", ")}</h4>
        <p>{weather.main.temp} ℃</p>
        <p>{new Date(weather.dt * 1000).toLocaleDateString()}</p>
    </Card.Text>
    </Card.Body>
</Card>
    
    );
  };
  
  export default HavaDurumu;