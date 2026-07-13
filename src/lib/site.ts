export const WHATSAPP_NUMBER = "5537999275292";

export const DEFAULT_WHATSAPP_MESSAGE =
  "Olá! Vim pelo site do DRF Musical e gostaria de um orçamento para música ao vivo no meu casamento.";

export const INSTRUMENTS = [
  { id: "voz", name: "Voz", price: 600 },
  { id: "teclado", name: "Teclado", price: 600 },
  { id: "violino", name: "Violino", price: 600 },
  { id: "cello", name: "Cello", price: 600 },
  { id: "violao", name: "Violão", price: 550 },
  { id: "saxofone", name: "Saxofone", price: 600 },
  { id: "trompetes", name: "Trompetes (Clarinada)", price: 500 },
] as const;

export const SOUND_SYSTEM_PRICE = 350;

export const EVENT_TYPES = [
  "Casamento",
  "Recepção",
  "Casamento + Recepção",
] as const;

export type EventType = (typeof EVENT_TYPES)[number];
export type InstrumentId = (typeof INSTRUMENTS)[number]["id"];

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);
}

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
