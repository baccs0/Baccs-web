"use client";
import * as React from "react";
import { EventCard } from "./event-card";
import { EventLightCard } from "./event-light-weight-card";
import { mockEvents } from "../../mock-data";
export const EventHomeList = () => {
  return (
    <div
      style={{
        width: "1280px",
      }}
    >
      <div style={{ width: "100%" }}>
        {mockEvents.slice(0, 2).map((event) => (
          <EventCard event={event} />
        ))}
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        {mockEvents.slice(2, mockEvents.length).map((event) => (
          <div style={{ width: "49.5%" }}>
            <EventLightCard event={event} />
          </div>
        ))}
      </div>
    </div>
  );
};
