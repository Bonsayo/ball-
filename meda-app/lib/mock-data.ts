export interface Field {
  id: string;
  name: string;
  area: string;
  pricePeak: number;
  priceOffPeak: number;
  rating: number;
  images: string[];
  size: string;
  turf: string;
  amenities: string[];
  hasLights: boolean;
  allowPayAtGate: boolean;
}

export interface Booking {
  id: string;
  fieldId: string;
  date: string; // ISO date string
  startTime: string; // HH:mm
  endTime: string; // HH:mm
  status: 'upcoming' | 'pending' | 'checked-in' | 'no-show' | 'late' | 'cancelled';
  amount: number;
  customerName?: string;
  customerPhone?: string;
  paymentMethod: 'telebirr' | 'cash' | 'bank_transfer';
}

export interface Worker {
  id: string;
  name: string;
  phone: string;
  role: 'manager' | 'gatekeeper' | 'cashier';
  onDuty: boolean;
}

export const mockFields: Field[] = [
  {
    id: "f1",
    name: "Bole Mini Stadium",
    area: "Bole",
    pricePeak: 600,
    priceOffPeak: 500,
    rating: 4.7,
    images: ["/placeholder.jpg"], // Will be a generic placeholder for now
    size: "7-a-side",
    turf: "Artificial turf",
    amenities: ["Lights", "Parking", "Shower", "Bibs", "Ball", "Water"],
    hasLights: true,
    allowPayAtGate: true,
  },
  {
    id: "f2",
    name: "CMC Football Arena",
    area: "CMC",
    pricePeak: 450,
    priceOffPeak: 400,
    rating: 4.3,
    images: ["/placeholder.jpg"],
    size: "5-a-side",
    turf: "Artificial turf",
    amenities: ["Lights", "Parking", "Ball"],
    hasLights: true,
    allowPayAtGate: false,
  },
  {
    id: "f3",
    name: "Ayat Grass Field",
    area: "Ayat",
    pricePeak: 400,
    priceOffPeak: 300,
    rating: 4.9,
    images: ["/placeholder.jpg"],
    size: "11-a-side",
    turf: "Grass",
    amenities: ["Parking", "Shower", "Water"],
    hasLights: false,
    allowPayAtGate: true,
  },
  {
    id: "f4",
    name: "Megenagna 5-a-side",
    area: "Megenagna",
    pricePeak: 500,
    priceOffPeak: 450,
    rating: 4.1,
    images: ["/placeholder.jpg"],
    size: "5-a-side",
    turf: "Artificial turf",
    amenities: ["Lights", "Bibs", "Ball"],
    hasLights: true,
    allowPayAtGate: true,
  },
  {
    id: "f5",
    name: "Kazanchis Turf",
    area: "Kazanchis",
    pricePeak: 700,
    priceOffPeak: 600,
    rating: 4.5,
    images: ["/placeholder.jpg"],
    size: "7-a-side",
    turf: "Artificial turf",
    amenities: ["Lights", "Shower", "Bibs", "Ball", "Water"],
    hasLights: true,
    allowPayAtGate: false,
  }
];

export const mockBookings: Booking[] = [
  { id: "b1", fieldId: "f1", date: new Date().toISOString().split('T')[0], startTime: "18:00", endTime: "19:00", status: "upcoming", amount: 600, customerName: "Abebe Kebede", customerPhone: "911234567", paymentMethod: "telebirr" },
  { id: "b2", fieldId: "f1", date: new Date().toISOString().split('T')[0], startTime: "19:00", endTime: "20:00", status: "pending", amount: 600, customerName: "Chala Merera", customerPhone: "922334455", paymentMethod: "cash" },
  { id: "b3", fieldId: "f2", date: new Date().toISOString().split('T')[0], startTime: "16:00", endTime: "17:00", status: "checked-in", amount: 450, customerName: "Dawit", customerPhone: "933445566", paymentMethod: "telebirr" },
  // Additional mock bookings can be used for UI validation
];

export const mockWorkers: Worker[] = [
  { id: "w1", name: "Elias", phone: "911001100", role: "manager", onDuty: true },
  { id: "w2", name: "Sara", phone: "922002200", role: "gatekeeper", onDuty: false },
  { id: "w3", name: "Yared", phone: "933003300", role: "cashier", onDuty: true },
];

export const ownerProfile = {
  name: "Eyob",
  availableBalance: 12400,
  thisWeek: 18500,
  thisMonth: 64200,
};
