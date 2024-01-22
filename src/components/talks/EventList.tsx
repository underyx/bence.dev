interface Props {
  events: any[];
}
const EventList = ({ events }: Props) => (
  <ul
    style={{
      margin: 0,
      listStyle: "none",
      fontSize: "0.9rem",
      textAlign: "left",
      paddingLeft: "1rem",
      listStyleType: "none",
    }}
  >
    {events.map((event) => (
      <li style={{ marginBottom: 0 }} key={event.slug}>
        <a
          href={event.url}
          style={{ textDecoration: "underline", color: "hsl(240, 30%, 75%)" }}
        >
          {event.name}
        </a>
        {event.venue && ` at ${event.venue}`}
        {event.city && ` in ${event.city}`}
      </li>
    ))}
  </ul>
);

export default EventList;
