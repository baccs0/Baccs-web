"use client";
import * as React from "react";

export const EventCard = ({ event }) => {
  return (
    <div
      style={{
        display: "flex",
        height: "387px",
        borderBottom: "solid",
        paddingTop: "21px",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          width: "49.5%",
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        <div>
          <div>
            <span style={{ color: "#CD0000" }}>{event.date}</span>
            {" - "}
            <span>{event.category}</span>
          </div>
          <div style={{ fontSize: "48px" }}>{event.eventName}</div>
        </div>

        <div style={{ paddingBottom: "24px" }}>
          {event.ticketLink && <a href={event.ticketLink}>Ticket Link</a>}
          <div style={{ color: "#7E7E7E" }}>{event.discription}</div>
        </div>
      </div>

      <div style={{ width: "49.5%", height: "100%" }}>
        <img
          style={{ width: "100%", height: "100%", flex: "0 0 0 0" }}
          src={event.image}
        />
      </div>
    </div>
  );
};
