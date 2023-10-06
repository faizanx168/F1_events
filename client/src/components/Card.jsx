import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Card.css";

const Card = (props) => {
  const [event, setEvent] = useState({
    id: 0,
    date: "",
    event: "",
    image: "",
  });

  useEffect(() => {
    setEvent({
      id: props.id,
      date: props.date,
      event: props.event,
      image: props.image,
    });
  }, [props]);

  return (
    <div className="card">
      <div
        className="top-container"
        style={{ backgroundImage: `url(${event.image})` }}
      ></div>
      <div className="bottom-container">
        <h3>{event.event}</h3>
        <p>{"Date: " + event.date}</p>
        <Link to={"/events/" + event.id}>
          <a>See More →</a>
        </Link>
      </div>
    </div>
  );
};

export default Card;
