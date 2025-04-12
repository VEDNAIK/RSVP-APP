import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import client from '../api/client';

export type RSVPStatus = 'Yes' | 'No' | 'Maybe';

export interface RsvpEntry {
  name: string;
  status: RSVPStatus;
}

export function useRsvpData() {
  const queryClient = useQueryClient();

  const rsvps = useQuery<RsvpEntry[]>({
    queryKey: ['rsvps'],
    queryFn: async () => (await client.get('/')).data,
  });

  const summary = useQuery({
    queryKey: ['summary'],
    queryFn: async () => (await client.get('/summary')).data,
  });

  const addRsvp = useMutation({
    mutationFn: async (entry: RsvpEntry) => client.post('/', entry),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['rsvps'] });
      queryClient.invalidateQueries({ queryKey: ['summary'] });
    },
  });

  return { rsvps, summary, addRsvp };
}