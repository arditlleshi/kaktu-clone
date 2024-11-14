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

export interface AIValuation {
  currentValue: number;
  predictedValue: number;
  confidence: number;
  rentalYield: number;
  appreciation: number;
  investmentScore: number;
  marketTrend: 'up' | 'down' | 'stable';
  comparables: number;
}