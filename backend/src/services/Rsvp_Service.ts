import { RsvpEntry } from '../shared/types';

export interface RsvpStorage {
  getAll(): Promise<RsvpEntry[]>;
  saveAll(entries: RsvpEntry[]): Promise<void>;
}

export class RsvpService {
  constructor(private storage: RsvpStorage) {}

  async addOrUpdate(entry: RsvpEntry): Promise<void> {
    const all = await this.storage.getAll();
    const updated = all.filter(e => e.name !== entry.name).concat(entry);
    await this.storage.saveAll(updated);
  }

  async getConfirmed(): Promise<string[]> {
    const all = await this.storage.getAll();
    return all.filter(e => e.status === 'Yes').map(e => e.name);
  }

  async getSummary() {
    const all = await this.storage.getAll();
    let confirmed = 0, declined = 0, maybe = 0;
    for (const e of all) {
      if (e.status === 'Yes') confirmed++;
      else if (e.status === 'No') declined++;
      else maybe++;
    }
    return {
      total: all.length,
      confirmed,
      declined,
      maybe
    };
  }

  async getAll(): Promise<RsvpEntry[]> {
    return await this.storage.getAll();
  }
}
