import { useState } from 'react';
import { useRsvpData, RSVPStatus } from '../hooks/use_RSVP';

const RsvpForm = () => {
  const { addRsvp } = useRsvpData();
  const [name, setName] = useState('');
  const [status, setStatus] = useState<RSVPStatus>('Yes');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;
    addRsvp.mutate({ name, status });
    setName('');
    setStatus('Yes');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
      <select value={status} onChange={e => setStatus(e.target.value as RSVPStatus)}>
        <option value="Yes">Yes</option>
        <option value="Maybe">Maybe</option>
        <option value="No">No</option>
      </select>
      <button type="submit">RSVP</button>
    </form>
  );
};

export default RsvpForm;