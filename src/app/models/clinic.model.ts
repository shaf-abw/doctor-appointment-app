export interface Clinic {
  id?: number;
  name: string;
  address1: string;
  address2?: string;
  city: string;
  state: string;
  appointmentTimes: string[];
}
