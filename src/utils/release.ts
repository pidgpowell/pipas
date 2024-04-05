export interface Release {
  _id?: string;
  date: Date;
  title: string;
  cat: string;
  format: number;
  label: string;
  hasImage?: boolean;
  tracklisting?: string;
  notes?: string;
}