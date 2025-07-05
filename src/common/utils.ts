import type {Brand} from "@/common/types";

export const detectCardType = (number:string): Brand  => {
    const re: Record<Exclude<Brand, "unknown">, RegExp> = {
        visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
        mastercard: /^5[1-5][0-9]{14}$/,
        amex: /^3[47][0-9]{13}$/,
    }

    for (const [brand, pattern] of Object.entries(re)) {
        if (pattern.test(number)) {
            return brand as Brand
        }
    }
    return "unknown"
}
