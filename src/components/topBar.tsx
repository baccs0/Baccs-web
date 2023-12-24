"use client";
import * as React from "react";
import Link from "next/link";
const TopBar = () => {
  const pages = [
    { name: "Home", url: "/home" },
    { name: "Events", url: "/events" },
    { name: "Movie Series", url: "/movie-series" },
    { name: "Support", url: "/support" },
    { name: "About", url: "/history" },
  ];
  const aboutPages = [
    { name: "Thank You", url: "/about/thanks" },
    { name: "History", url: "/about/history" },
  ];
  const appBarStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "1280px",
    marginTop: "21px",
  };
  const orgNameStyle = {
    alignItems: "center",
    display: "flex",
    fontSize: "20px",
  };
  const navStyle = {
    alignItems: "center",
    fontSize: "16px",
  };

  const liStyle = {
    display: "inline",
    marginRight: "15px", // Adjust as needed for spacing between navigation items
  };

  const linkStyle = {
    textDecoration: "none",
    color: "#333", // Adjust the color as needed
    fontWeight: "bold",
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="app-bar" style={appBarStyle}>
        <div style={orgNameStyle}>
          Bay Area Chinese Culture Salon &#40;BACCS&#41;
        </div>
        <nav style={navStyle}>
          <ul>
            {pages.map((page) => (
              <li style={liStyle}>
                <Link href={page.url} style={linkStyle}>
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};
export default TopBar;
