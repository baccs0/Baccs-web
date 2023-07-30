"use client";
import * as React from "react";
import TopBar from "../components/topBar";
import { EventCarousel } from "../components/carousel";
import YoutubeVideo from "../components/youtube";
import { Box } from "@mui/material";
const HomePage = () => {
  return (
    <div>
      <head>
        <title>Baccs | Home</title>
        <link
          rel="icon"
          type="image/x-icon"
          href="https://baccs.org/wp-content/uploads/2020/07/Logo-final.svg"
        />
      </head>
      <TopBar />
      <EventCarousel />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <YoutubeVideo videoId="PjfP2tmjtQM" autoPlay title="minions" />
      </Box>
    </div>
  );
};
export default HomePage;
