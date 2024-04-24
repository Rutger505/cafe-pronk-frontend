export interface ContactMessageData {
  id: number;
  user_id: number;
  name: string;
  business_name: string | null;
  email: string;
  subject: string;
  message: string;
  read: boolean;
  created_at: string;
  updated_at: string;
}
