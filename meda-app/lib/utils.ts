import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatETB(amount: number): string {
  return `${amount.toLocaleString()} ETB`;
}

export function formatTime(timeStr: string): string {
  const [hours, minutes] = timeStr.split(':');
  const h = parseInt(hours, 10);
  const ampm = h >= 12 ? 'PM' : 'AM';
  const displayH = h % 12 || 12;
  return `${displayH}:${minutes} ${ampm}`;
}

export function formatDate(isoDate: string, lang: 'en'|'am' = 'en'): string {
  const date = new Date(isoDate);
  if (lang === 'am') {
    // Very basic Amharic mock date for UI purposes
    const amharicDays = ["እሁድ", "ሰኞ", "ማክሰኞ", "ረቡዕ", "ሐሙስ", "አርብ", "ቅዳሜ"];
    const amharicMonths = ["መስከረም", "ጥቅምት", "ህዳር", "ታህሳስ", "ጥር", "የካቲት", "መጋቢት", "ሚያዚያ", "ግንቦት", "ሰኔ", "ሐምሌ", "ነሐሴ", "ጳጉሜ"];
    // Rough estimation mapping Gregorian to Ethiopian months
    return `${amharicDays[date.getDay()]}, ${amharicMonths[date.getMonth()]} ${date.getDate()}`;
  }
  return date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
}

export function formatPhone(phone: string): string {
  if (phone.length === 9) {
    return `+251 ${phone.substring(0,2)} ${phone.substring(2,5)} ${phone.substring(5)}`;
  }
  return phone;
}
