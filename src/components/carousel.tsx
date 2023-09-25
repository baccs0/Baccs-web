import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { Box } from "@mui/material";
export const EventCarousel = () => {
  var items = [
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

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
};

const Item = (props) => {
  return (
    <Paper>
      <Box
        sx={{
          display: { xs: "flex" },
          justifyContent: "center",
          width: "100%",
        }}
      >
        <img
          src={props.item.url}
          style={{ objectFit: "contain", height: "600px", width: "auto" }}
        />
      </Box>
    </Paper>
  );
};
