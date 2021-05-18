import Image from "next/image";
import Button from "../../ui/buttons";
import DateIcon from "../../ui/icons/date-icon";
import ArrowRightIcon from "../../ui/icons/arrow-right-icon";
import AddressIcon from "../../ui/icons/address-icon";
import styles from "./event-component.module.css";

function EventComponent(props) {
  const { id, image, title, date, address } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = address.replace(", ", "\n");

  const exploreLink = `/events/${id}`;

  return (
    <li className={styles.item}>
      <Image className={styles.img} src={"/" + image} alt={title} width={260} height={160} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{title}</h2>
          <div className={styles.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={styles.address}>
            <AddressIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={styles.actions}>
          <Button link={exploreLink}>
            Explore Event
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}

export default EventComponent;
