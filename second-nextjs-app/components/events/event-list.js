import EventComponent from "./event-component";
import styles from "./event-list.module.css";

function EventList(props) {
  const { eventsProps } = props;

  return (
    <ul className={styles.list}>
      {eventsProps.map((event) => (
        <EventComponent key={event.id} id={event.id} title={event.title} date={event.date} image={event.image} address={event.location} />
      ))}
    </ul>
  );
}

export default EventList;
