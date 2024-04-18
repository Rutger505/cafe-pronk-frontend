export interface ReservationData {
  id: number;
  user_id: number;
  people: number;
  date: string;
  message: string | null;
  pending: number;
  accepted: number;
  created_at: string;
  updated_at: string;
}
