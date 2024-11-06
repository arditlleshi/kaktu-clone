export interface Property {
  id: number;
  price: number;
  address: string;
  rooms?: number;
  baths?: number;
  sqft?: number;
  agency?: string;
  timestamp: string;
  image?: string;
  viewed?: boolean;
  coordinates: [number, number];
}

export interface Filter {
  city: string;
  priceRange: string;
  size: string;
  type: string;
}