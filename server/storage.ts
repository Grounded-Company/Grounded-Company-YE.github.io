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

    // Add the Growth Journal product
    this.createProduct({
      name: "The Growth Journal",
      description: "Grounded's signature plantable journal that blooms into wildflowers. Each page is crafted from premium recycled paper embedded with carefully selected wildflower seeds. As you fill its pages with your thoughts and reflections, you're not just documenting your personal growth – you're creating future gardens.",
      price: 2999,
      features: [
        "100% recycled, seed-embedded paper",
        "90 days of guided journaling prompts",
        "Mindfulness exercises and reflection spaces",
        "Plantable cover with premium wildflower seeds",
        "Step-by-step planting instructions",
        "Eco-friendly packaging"
      ],
      imageUrl: null
    });

    // Add some initial team members
    this.createTeamMember({
      name: "Sarah Green",
      role: "Founder & CEO",
      bio: "Passionate about combining personal development with environmental sustainability. Sarah founded Grounded to help people nurture both their inner growth and the world around them.",
      imageUrl: null
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
    const newProduct = {
      id,
      createdAt: new Date(),
      features: product.features || null,
      imageUrl: product.imageUrl || null,
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
    const newMember = {
      id,
      createdAt: new Date(),
      imageUrl: member.imageUrl || null,
      ...member,
    };
    this.team.set(id, newMember);
    return newMember;
  }
}

export const storage = new MemStorage();