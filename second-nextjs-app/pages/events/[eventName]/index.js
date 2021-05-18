import { useRouter } from "next/router";
import Head from "next/head";
import { getEventById } from "../../../dummy-data";
import EventSummary from "../../../components/event-detail/event-summary";
import EventContent from "../../../components/event-detail/event-content";
import EventLogistics from "../../../components/event-detail/event-logistics";

function EventPage() {
  const router = useRouter();
  const eventRouter = router.query.eventName;
  const event = getEventById(eventRouter);

  if (!event) {
    return <h1 className="center">No event</h1>;
  }
  return (
    <>
      <Head>
        <title>{event.title}</title>
        <meta name="description" content="Encontre o maiores eventos de NextJS..."></meta>
      </Head>
      <section>
        <EventSummary title={event.title} />
        <EventLogistics date={event.date} image={event.image} address={event.location} imageAlt={event.imageAlt} />
        <EventContent><p>{event.description}</p></EventContent>
      </section>
    </>
  );
}

export default EventPage;
