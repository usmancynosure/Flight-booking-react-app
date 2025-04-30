import { useState } from "react";

const BookingForm = ({ flight, onSubmit }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...flight, name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book Flight</h2>
      <p>{flight.origin} ➔ {flight.destination} - PKR {flight.price.toLocaleString()}</p>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default BookingForm;