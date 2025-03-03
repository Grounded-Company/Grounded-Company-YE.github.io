import { waitlist, type Waitlist, type InsertWaitlist } from "@shared/schema";

export interface IStorage {
  addToWaitlist(entry: InsertWaitlist): Promise<Waitlist>;
  getWaitlistCount(): Promise<number>;
}

export class MemStorage implements IStorage {
  private waitlist: Map<number, Waitlist>;
  private currentId: number;

  constructor() {
    this.waitlist = new Map();
    this.currentId = 1;
  }

  async addToWaitlist(entry: InsertWaitlist): Promise<Waitlist> {
    // Check if email already exists
    const exists = Array.from(this.waitlist.values()).find(
      (w) => w.email === entry.email
    );
    if (exists) {
      throw new Error("Email already registered");
    }

    const id = this.currentId++;
    const waitlistEntry: Waitlist = {
      id,
      email: entry.email,
      createdAt: new Date(),
    };
    this.waitlist.set(id, waitlistEntry);
    return waitlistEntry;
  }

  async getWaitlistCount(): Promise<number> {
    return this.waitlist.size;
  }
}

export const storage = new MemStorage();
