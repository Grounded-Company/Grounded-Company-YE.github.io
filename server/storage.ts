import { type Product, type InsertProduct, type Team, type InsertTeam } from "@shared/schema";

export interface IStorage {
  // Products
  getProducts(): Promise<Product[]>;
  getProduct(id: number): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;

  // Team
  getTeamMembers(): Promise<Team[]>;
  getTeamMember(id: number): Promise<Team | undefined>;
  createTeamMember(member: InsertTeam): Promise<Team>;
}

export class MemStorage implements IStorage {
  private products: Map<number, Product>;
  private team: Map<number, Team>;
  private currentProductId: number;
  private currentTeamId: number;

  constructor() {
    this.products = new Map();
    this.team = new Map();
    this.currentProductId = 1;
    this.currentTeamId = 1;

    // Add some initial products
    this.createProduct({
      name: "Growth Journal - Spring Edition",
      description: "A plantable journal that blooms into wildflowers. Track your personal growth while nurturing actual growth.",
      price: 2999,
      features: ["100% recycled paper", "Embedded wildflower seeds", "90-day journal prompts", "Plantable cover"],
      imageUrl: "/images/spring-journal.jpg"
    });

    // Add some initial team members
    this.createTeamMember({
      name: "Sarah Green",
      role: "Founder & CEO",
      bio: "Passionate about combining personal development with environmental sustainability.",
      imageUrl: "/images/sarah.jpg"
    });
  }

  // Product methods
  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: number): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(product: InsertProduct): Promise<Product> {
    const id = this.currentProductId++;
    const newProduct: Product = {
      id,
      createdAt: new Date(),
      ...product,
    };
    this.products.set(id, newProduct);
    return newProduct;
  }

  // Team methods
  async getTeamMembers(): Promise<Team[]> {
    return Array.from(this.team.values());
  }

  async getTeamMember(id: number): Promise<Team | undefined> {
    return this.team.get(id);
  }

  async createTeamMember(member: InsertTeam): Promise<Team> {
    const id = this.currentTeamId++;
    const newMember: Team = {
      id,
      createdAt: new Date(),
      ...member,
    };
    this.team.set(id, newMember);
    return newMember;
  }
}

export const storage = new MemStorage();