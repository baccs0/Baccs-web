"use client";
import * as React from "react";
import { useRouter } from "next/router";
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
