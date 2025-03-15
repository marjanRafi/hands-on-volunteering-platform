import React, { useEffect, useState } from "react";
import axios from "axios";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/events/list")
      .then((res) => setEvents(res.data));
  }, []);

  return (
    <div>
      <h1>Events</h1>
      {events.map((event) => (
        <div key={event.id}>
          <h3>{event.title}</h3>
          <p>{event.location}</p>
          <p>{event.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Events;
