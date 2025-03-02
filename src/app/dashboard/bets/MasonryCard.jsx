import { useState, useRef, useEffect } from "react";
import BetEventCard from "./BetEventCard";

function MasonryCard({ event }) {
  const cardRef = useRef(null);
  const [span, setSpan] = useState(0);
  const rowHeight = 10; // This should match your auto-rows value in px

  useEffect(() => {
    if (cardRef.current) {
      const height = cardRef.current.getBoundingClientRect().height;
      const calculatedSpan = Math.ceil(height / rowHeight);
      setSpan(calculatedSpan);
    }
  }, [event]); // Recalculate if event data changes

  return (
    <div ref={cardRef} style={{ gridRowEnd: `span ${span}` }}>
      <BetEventCard event={event} />
    </div>
  );
}

export default MasonryCard;
