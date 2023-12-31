"use client";
import * as React from "react";
import TopBar from "../../components/topBar";
import { TabList } from "../../components/event-list/tab-list";
import { CategoryTabList } from "../../components/event-list/category-tab-list";
import { mockEvents } from "../../mock-data";
import { EventTextCard } from "../../components/event-list/event-text-card";
const tabs = [
  { name: "List view", url: "/events" },
  { name: "Calendar view", url: "/events/calendar-view" },
];
const selectedTab = "List view";
const Events = () => {
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
              borderBottom: "solid",
            }}
          >
            <div>
              <span style={{ fontSize: "128px", color: "#CD0000" }}>E</span>
              <span style={{ fontSize: "128px" }}>vents</span>
            </div>
            <TabList tabs={tabs} selected={selectedTab} />
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "1280px", display: "flex" }}>
            <div style={{ width: "30%" }}>
              <CategoryTabList />
            </div>
            <div style={{ width: "70%" }}>
              {mockEvents.map((event) => (
                <EventTextCard event={event} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Events;
