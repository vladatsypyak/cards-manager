export type Brand = "visa" | "mastercard" | "amex" | "unknown"

export type Card = {
	id: string;
	brand: "visa" | "mastercard" | "amex" | "unknown";
	last4: string;
	isDefault: boolean;
}
