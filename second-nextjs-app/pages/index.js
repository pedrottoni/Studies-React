import Head from "next/head";
import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data";

function HomePage() {
  const featuredEvents = getFeaturedEvents();

  return (
    <section>
      <Head>
        <title>NextJS Events</title>
        <meta name="description" content="Encontre o maiores eventos de NextJS..."></meta>
      </Head>
      <h1 className="center">Home Page</h1>
      <EventList eventsProps={featuredEvents} />
    </section>
  );
}

export default HomePage;
