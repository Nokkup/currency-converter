import { isValidCurrencyCode } from "./currencyCode";

export function parseInput(str) {
    const regexp = RegExp("(\\d+[.,]?\\d*) ([A-Z]{3}) IN ([A-Z]{3})");
    const params = str.toUpperCase().match(regexp);

    if (params) {
        const value = params[1].replace(",", ".");
        const from = isValidCurrencyCode(params[2]) ? params[2] : null;
        const to = isValidCurrencyCode(params[3]) ? params[3] : null;

        if (value && from && to) {
            return { value, from, to };
        }
    }

    return null;
}
