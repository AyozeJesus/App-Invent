export interface Shipment {
  id: number;
  destination_address: string;
  postal_code: string;
  recipient_name: string;
  sender_name: string;
  weight_kg: number;
  shipping_company: string;
  package_category: string;
  price: number;
}
