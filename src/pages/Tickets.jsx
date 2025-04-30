const Tickets = ({ bookedTickets }) => (
    <section className="page">
      <h2>Your Tickets</h2>
      {bookedTickets.length === 0 ? (
        <p>No tickets booked yet.</p>
      ) : (
        <ul>
          {bookedTickets.map((ticket, index) => (
            <li key={index}>
              {ticket.name} booked {ticket.origin} ➔ {ticket.destination} for PKR {ticket.price.toLocaleString()}.
            </li>
          ))}
        </ul>
      )}
    </section>
  );
  
  export default Tickets;
  