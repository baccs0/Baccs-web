import Link from "next/link";
export const EventTextCard = ({ event }) => {
  console.log(event);
  return (
    <div
      style={{
        borderBottom: "solid",
        height: "256px",
        marginTop: "32px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <div>
        <div style={{ marginBottom: "12px" }}>
          <span style={{ color: "#CD0000" }}>{event.date}</span>
          {" - "}
          <span>{event.category}</span>
        </div>
        {event.ticketLink && (
          <div style={{ marginBottom: "12px" }}>
            <Link href={event.ticketLink}>Ticket link</Link>
          </div>
        )}
        <div style={{ fontSize: "48px", marginBottom: "12px" }}>
          {event.eventName}
        </div>
      </div>
      <div style={{ color: " #7E7E7E", marginBottom: "12px" }}>
        {event.discription}
      </div>
    </div>
  );
};
