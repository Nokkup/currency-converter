function formatCurrency(value, currencyCode) {
    const formatter = new Intl.NumberFormat("ru", {
        style: "currency",
        currencyDisplay: "code",
        currency: currencyCode,
    });

    return formatter.format(value);
}

export function formatCurrencyRate(value, from, to, result) {
    try {
        return `${formatCurrency(value, from)}  =  ${formatCurrency(result, to)}`;
    } catch {
        return "";
    }
}
