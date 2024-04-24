export interface ReservationData {
  id: number;
  user_id: number;
  name: string;
  party_size: number;
  datetime: string;
  message: string | null;
  pending: boolean;
  accepted: boolean;
  created_at: string;
  updated_at: string;
}
