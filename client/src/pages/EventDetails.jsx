import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./EventDetails.css";

const EventDetails = ({ data }) => {
  const [event, setEvent] = useState({
    id: 0,
    date: "",
    event: "",
    image: "",
    location: "",
    time: "",
    channel: "",
  });
  const { id } = useParams();

  useEffect(() => {
    const fetchEventById = async () => {
      const response = await fetch(`http://localhost:3000/events/${id}`);
      const data = await response.json();
      setEvent(data);
    };
    fetchEventById();
  }, [data, id]);

  return (
    <div className="EventDetails">
      <main id="event-content" class="event-info">
        <div class="image-container">
          <img id="image" src={event.image} />
        </div>
        <div class="event-details">
          <h2 id="name">{event.event}</h2>
          <p id="date">{"Date: " + event.date}</p>
          <p id="location">{"Location: " + event.location}</p>
          <p id="time">{"Time: " + event.time}</p>
          <p id="channel">{"Event will be live on: " + event.channel}</p>
        </div>
      </main>
    </div>
  );
};

export default EventDetails;
