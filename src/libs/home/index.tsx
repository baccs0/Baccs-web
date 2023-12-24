"use client";
import TopBar from "../../components/topBar";
import { EventCarousel } from "../../components/home/carousel";
import { EventHomeList } from "../../components/home/event-home-list";

const HomePage = () => {
  return (
    <div style={{ fontFamily: "Spline Sans, sans-serif" }}>
      <div>
        <TopBar />
        <EventCarousel />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <EventHomeList />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
