export type RSVPStatus = 'Yes' | 'No' | 'Maybe';

export interface RsvpEntry {
  name: string;
  status: RSVPStatus;
}