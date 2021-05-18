import { useRouter } from "next/router";
import Head from "next/head";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import MyHead from "../../components/MyHead"

function EventsFilterPage() {
  const router = useRouter();
  const filterData = router.query.eventFilter;

  if (!filterData) {
    return (
      <>
        <MyHead title="Filtered Events" content={`Encontre o maiores eventos de NextJS`} />
        <h1 className="center">Loading...</h1>
      </>
    );
  }

  const filteredYear = +filterData[0];
  const filteredMonth = +filterData[1];

  if (isNaN(filteredYear) || isNaN(filteredMonth) || filteredYear > 2030 || filteredYear < 2021 || filteredMonth < 1 || filteredMonth > 12) {
    return (
      <>
        <MyHead title="Filtered Events" content={`Encontre o maiores eventos de NextJS de ${filteredMonth}/${filteredYear}`} />
        <h1 className="center">Invalid filter</h1>
      </>
    );
  }

  const filteredEvents = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <>
        <MyHead title="Filtered Events" content={`Encontre o maiores eventos de NextJS de ${filteredMonth}/${filteredYear}`} />
        <h1 className="center">No events</h1>
      </>
    )
  }

  return (
    <section>
      <MyHead title="Filtered Events" content={`Encontre o maiores eventos de NextJS de ${filteredMonth}/${filteredYear}`} />
      <h1 className="center">Events Filter Page</h1>
      <EventList eventsProps={filteredEvents} />
    </section>
  );
}

export default EventsFilterPage;
