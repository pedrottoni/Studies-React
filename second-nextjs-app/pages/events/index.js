import { useRouter } from "next/router";
import Head from "next/head"
import EventList from "../../components/events/event-list";
import SearchEventsComp from "../../components/events/events-search";
import { getAllEvents } from "../../dummy-data";

function AllEventsPage() {
  const router = useRouter();
  const allEvents = getAllEvents();

  function findEventsHandler(year, month) {
    const fullpath = `/events/${year}/${month}`;
    router.push(fullpath);
  }

  return (
    <>
      <Head>
        <title>NextJS All Events</title>
        <meta name="description" content="Encontre o maiores eventos de NextJS..."></meta>
      </Head>
      <SearchEventsComp onSearch={findEventsHandler}></SearchEventsComp>

      <section>
        <h1 className="center">All events Page</h1>
        <EventList eventsProps={allEvents} />
      </section>
    </>
  );
}

export default AllEventsPage;
