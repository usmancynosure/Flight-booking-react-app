import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BookingPage from "./pages/BookingPage";
import Tickets from "./pages/Tickets";
import "./App.css";
import { useState } from "react";

function App() {
  const [bookedTickets, setBookedTickets] = useState([]);

  const handleBooking = (ticket) => {
    setBookedTickets((prev) => [...prev, ticket]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<BookingPage onBooking={handleBooking} />} />
        <Route path="/tickets" element={<Tickets bookedTickets={bookedTickets} />} />
      </Routes>
    </Router>
  );
}

export default App;
