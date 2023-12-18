"use client";
import * as React from "react";
import { EventCard } from "./event-card";
import { EventLightCard } from "./event-light-weight-card";

export const EventHomeList = () => {
  const events = [
    {
      date: "2023-09-17",
      category: "Movie Screening",
      ticketLink: "",
      eventName: "A New Old Play",
      image:
        "https://tjva82.p3cdn1.secureserver.net/wp-content/uploads/2023/09/image-2.png",
      discription:
        "QIU Jiongjiong’s visually magnificent new film is a unique hybrid of fiction, historical reminiscence, and experimental theatre. Its overview of China from the 1930s to the 1980s is filtered through Qiu Yu, a Sichuan opera ‘clown’ based on the director’s own famous grandfather. As Qiu Yu negotiates his entry into Hades with two comic sidekicks, his departing soul reviews his childhood, his performances, family tragedies, and political perils.",
    },
    {
      date: "2023-09-17",
      category: "Lecture",
      eventName: "How to Practice Public Welfare Globally by Hongxiang Huang",
      image:
        "https://tjva82.p3cdn1.secureserver.net/wp-content/uploads/2023/09/image-2.png",
      discription:
        "Whether you are intrigued by international philanthropy or seeking to understand how to make an impact on the global stage, this sharing event will provide you with valuable insights and inspiration.",
    },
    {
      date: "2023-09-17",
      category: "Movie Screening",
      image:
        "https://tjva82.p3cdn1.secureserver.net/wp-content/uploads/2023/09/image-2.png",
      eventName: "PLACEHOLDER",
    },
    {
      date: "2023-09-17",
      category: "Movie Screening",
      image:
        "https://tjva82.p3cdn1.secureserver.net/wp-content/uploads/2023/09/image-2.png",
      eventName: "PLACEHOLDER",
    },
  ];
  return (
    <div
      style={{
        width: "1280px",
      }}
    >
      <div style={{ width: "100%" }}>
        {events.slice(0, 2).map((event) => (
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
        {events.slice(2, events.length).map((event) => (
          <div style={{ width: "49.5%" }}>
            <EventLightCard event={event} />
          </div>
        ))}
      </div>
    </div>
  );
};
