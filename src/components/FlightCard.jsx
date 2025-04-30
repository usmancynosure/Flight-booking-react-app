import { useNavigate } from "react-router-dom";

const FlightCard = ({ flight }) => {
  const navigate = useNavigate();

  return (
    <div className="flight-card">
      <h3>{flight.origin} ➔ {flight.destination}</h3>
      <p><strong>Price:</strong> PKR {flight.price.toLocaleString()}</p>
      <button onClick={() => navigate(`/book/${flight.id}`)}>Book</button>
    </div>
  );
};

export default FlightCard;