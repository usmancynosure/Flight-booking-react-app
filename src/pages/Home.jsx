import FlightCard from "../components/FlightCard";
import flights from "../data/flights";

const Home = () => (
  <section className="page">
    <h2>Available Flights</h2>
    <div className="flight-list">
      {flights.map((flight) => (
        <FlightCard key={flight.id} flight={flight} />
      ))}
    </div>
  </section>
);

export default Home;