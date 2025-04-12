import { useRsvpData } from '../hooks/use_RSVP';
import { useState } from 'react';

const RsvpList = () => {
  const { rsvps } = useRsvpData();
  const [showList, setShowList] = useState(false);

  const toggleList = () => {
    setShowList(prev => !prev);
  };

  if (rsvps.isLoading) return <p>Loading RSVPs...</p>;

  return (
    <div>
      <button onClick={toggleList}>
        {showList ? 'Hide Attendees' : 'Show Attendees'}
      </button>

      {showList && (
        <ul>
          {rsvps.data?.map(r => (
            <li key={r.name}>
              {r.name} — {r.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RsvpList;