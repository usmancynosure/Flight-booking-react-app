import { useParams } from "react-router-dom";
import flights from "../data/flights";
import BookingForm from "../components/BookingForm";

const BookingPage = ({ onBooking }) => {
  const { id } = useParams();
  const flight = flights.find(f => f.id === parseInt(id));

  return (
    <section className="page">
      {flight ? <BookingForm flight={flight} onSubmit={onBooking} /> : <p>Flight not found</p>}
    </section>
  );
};

export default BookingPage;
