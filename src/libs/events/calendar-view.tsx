"use client";
import * as React from "react";
import TopBar from "../../components/topBar";
import { TabList } from "../../components/event-list/tab-list";

const tabs = [
  { name: "List view", url: "/events" },
  { name: "Calendar view", url: "/events/calendar-view" },
];
const selectedTab = "Calendar view";
const EventsCalendar = () => {
  return (
    <div style={{ fontFamily: "Spline Sans, sans-serif" }}>
      <div>
        <TopBar />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              width: "1280px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>
              <span style={{ fontSize: "128px", color: "#CD0000" }}>E</span>
              <span style={{ fontSize: "128px" }}>vents</span>
            </div>
            <TabList tabs={tabs} selected={selectedTab} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventsCalendar;
