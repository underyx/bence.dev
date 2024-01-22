import { useState } from "react";
import EventList from "./EventList.tsx";
import dayjs from 'dayjs'

interface Props {
  talk: any;
}


const TalkContext = ({ talk }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  if (talk.events === undefined) return null;

  const latestEvent = talk.events[talk.events.length - 1];
  let content = "";

  if (talk.events.length === 1) {
    content += `Held on ${dayjs(latestEvent.date).format("MMM D, YYYY")}`;
  }

  if (talk.events.length > 1) {
    content += `Held most recently on ${dayjs(latestEvent.date).format("MMM D, YYYY")}`;
    const timesText =
      talk.events.length === 2 ? "twice" : `${talk.events.length} times`;
    content += `; ${timesText} in total`;
  }

  return (
    <section style={{ fontStyle: "italic" }}>
      {content} <a role="button" style={{cursor:"pointer"}} onClick={()=>{setIsOpen(!isOpen)}}>Where?</a>
      {isOpen && <EventList events={talk.events} />}
    </section>
  );
};

export default TalkContext;
