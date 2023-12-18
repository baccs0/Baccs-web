import React, { useState } from "react";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
export const EventCarousel = () => {
  const posts = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
      url: "https://baccs.org/wp-content/uploads/2023/07/kailiblues.jpeg",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
      url: "https://roxie.com/wp-content/uploads/2023/07/tsedentribute-768x432.png",
    },
    {
      name: "Random Name #3",
      description: "Probably the most random thing you have ever seen!",
      url: "https://roxie.com/wp-content/uploads/2023/07/Tharlo-02-704x396.webp",
    },
    {
      name: "Random Name #4",
      description: "Probably the most random thing you have ever seen!",
      url: "https://roxie.com/wp-content/uploads/2023/07/03-Jinpa-2018.jpg",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % posts.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + posts.length) % posts.length
    );
  };
  const buttonStyle = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: "1",
    background: "none",
    border: "none",
    fontSize: "24px",
    cursor: "pointer",
  };

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "640px",
        margin: "0 auto",
      }}
    >
      <div
        style={{
          display: "flex",
          transition: "transform 0.5s",
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {posts.map((post, index) => (
          <img
            key={index}
            src={post.url}
            alt={`slide-${index + 1}`}
            style={{ width: "100%", flex: "0 0 auto" }}
          />
        ))}
      </div>
      <button onClick={prevSlide} style={buttonStyle}>
        <span>&#8249;</span>
      </button>
      <button onClick={nextSlide} style={{ ...buttonStyle, right: "10px" }}>
        <span>&#8250;</span>
      </button>
    </div>
  );
};
