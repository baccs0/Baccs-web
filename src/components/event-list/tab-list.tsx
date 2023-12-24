import * as React from "react";
import Link from "next/link";
const selectedStyle = {
  textDecoration: "none",
  color: "#333",
  borderBottom: "solid",
  borderColor: "#7E7E7E",
};
const unSelectedStyle = {
  textDecoration: "none",
  color: "#7E7E7E",
};

export const TabList = ({ tabs, selected }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <div>
        {tabs.map((tab, index) => (
          <Link
            href={tab.url}
            style={{
              ...(selected === tab.name ? selectedStyle : unSelectedStyle),
              ...(index ? { marginLeft: "12px" } : {}),
            }}
          >
            {tab.name}
          </Link>
        ))}
      </div>
    </div>
  );
};
