import { currencyCodes } from "./currencyCodesMap";

function getCountryCode(locale) {
    const components = locale.split("-");
    if (components.length >= 1) {
        return components[0];
    }
    return locale;
}

export function getCurrencyCode(locale) {
    const countryCode = getCountryCode(locale).toUpperCase();
    return currencyCodes[countryCode] || null;
}

export function isValidCurrencyCode(currencyCode) {
    return Object.values(currencyCodes).includes(currencyCode);
}
