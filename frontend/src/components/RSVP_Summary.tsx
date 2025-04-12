import { useRsvpData } from '../hooks/use_RSVP';

const RsvpSummary = () => {
  const { summary } = useRsvpData();

  if (summary.isLoading) return <p>Loading summary...</p>;

  const { total, confirmed, declined, maybe } = summary.data;

  return (
    <div>
      <h3>RSVP Summary</h3>
      <p>Total: {total}</p>
      <p>✅ Yes: {confirmed}</p>
      <p>❔ Maybe: {maybe}</p>
      <p>❌ No: {declined}</p>
    </div>
  );
};

export default RsvpSummary;