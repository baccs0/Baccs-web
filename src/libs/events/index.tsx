"use client";
import * as React from "react";
import TopBar from "../../components/topBar";
import YoutubeVideo from "../../components/youtube";
import { Box } from "@mui/material";

const Events = () => {
  return (
    <div>
      <head>
        <title>Baccs | Events</title>
      </head>
      <TopBar />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <YoutubeVideo videoId="PjfP2tmjtQM" autoPlay title="minions" />
      </Box>
    </div>
  );
};
export default Events;
