export interface NeighborhoodInfo {
  id: 'tatuape' | 'mooca' | 'vila-ema';
  name: string;
  subtitle: string;
  description: string;
  tagline: string;
  formUrl: string;
  formLabel: string;
  image: string;
  highlights: string[];
  stats: {
    label: string;
    value: string;
  }[];
  metroStations: string[];
}

export interface PropertyItem {
  id: string;
  name: string;
  neighborhoodId: 'tatuape' | 'mooca' | 'vila-ema';
  neighborhoodName: string;
  status: 'Lançamento' | 'Em Obras' | 'Pronto para Morar';
  priceFrom: string;
  estimatedInstallment?: string;
  sizeRange: string;
  bedrooms: string;
  suites: string;
  parkingSpots: string;
  image: string;
  gallery: string[];
  formUrl: string;
  addressSummary: string;
  features: string[];
  tag?: string;
}

export interface Differential {
  title: string;
  description: string;
  iconName: string;
}
