export const EventLightCard = ({ event }) => {
  return (
    <div style={{ paddingTop: "21px" }}>
      <img
        style={{ width: "100%", flex: "0 0 auto", height: "387px" }}
        src={event.image}
      />
      <div>
        <span style={{ color: "#CD0000" }}>{event.date}</span>
        {" - "}
        <span>{event.category}</span>
      </div>
      <div style={{ fontSize: "48px" }}>{event.eventName}</div>
    </div>
  );
};
