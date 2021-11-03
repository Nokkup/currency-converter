import axios from "axios";

const API_URL = `https://v1.nocodeapi.com/nokkup/cx/${process.env.REACT_APP_TOKEN}/rates`;

export async function convert({ value, from, to }) {
    return axios.get(`${API_URL}/convert`, {
        params: {
            amount: value,
            from,
            to,
        },
    });
}

export async function getRates(baseCurrency) {
    return axios.get(API_URL, {
        params: {
            source: baseCurrency,
            target: "USD,EUR,RUB,GBP,CNY,UAH",
        },
    });
}
