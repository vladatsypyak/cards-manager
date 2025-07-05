import {Brand} from "@/common/types";

export const isProduction = import.meta.env.MODE === "production";
export const detectCardType = (number:string): Brand  => {
    const re = {
        visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
        mastercard: /^5[1-5][0-9]{14}$/,
        amex: /^3[47][0-9]{13}$/,
    }

    for (const key in re) {
        if (re[key].test(number)) {
            return key as "visa" | "mastercard" | "amex"
        }
    }
    return "unknown"
}
