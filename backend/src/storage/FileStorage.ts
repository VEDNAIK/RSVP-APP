import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { RsvpEntry } from '../shared/types';
import { RsvpStorage } from '../services/Rsvp_Service';

type Data = { rsvps: RsvpEntry[] };

const adapter = new JSONFile<Data>('rsvps.json');
const db = new Low<Data>(adapter, { rsvps: [] });

export class FileStorage implements RsvpStorage {
  async getAll(): Promise<RsvpEntry[]> {
    await db.read();
    return db.data!.rsvps;
  }

  async saveAll(entries: RsvpEntry[]): Promise<void> {
    db.data!.rsvps = entries;
    await db.write();
  }
}
