import { useEffect, useRef, useState } from "react";

const DEFAULT_OPTIONS = {
    method: "GET",
    headers: undefined,
    body: undefined
}

const _mergeDefaultOptions = (options) => {
    return { ...DEFAULT_OPTIONS, ...options };
}

/**
 * Custom hook for fetching data
 * @param {string} url 
 * @param {object} options 
 * @param {string} [options.method]
 * @param {object} [options.headers]
 * @param {any} [options.body]
 * @returns 
 */
export const useFetch = (url, options = { ...DEFAULT_OPTIONS }) => {
    // Merge default options to prevent data loss
    options = _mergeDefaultOptions(options);

    if (typeof options.body !== "string") {
        options.body = JSON.stringify(options.body);
    }

    if (options.body) {
        options.headers = { ...options.headers, "Content-Type": "application/json" };
    }

    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const cache = useRef({});

    /**
     * Data fetching function
     */
    const fetchData = async () => {
        if (!loading) setLoading(true);
        if (error) setError(false);

        if (cache.current[url]) {
            setData(cache.current[url]);
            setLoading(false);
            return;
        }

        try {
            const response = await fetch(url, options);

            if (response.ok) {
                const data = await response.json();

                setData(data);
                cache.current[url] = data;
            } else {
                throw new Error("Error during data fetching, please try again later");
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [url]);

    return {
        data, loading, error, reload: fetchData
    }
}






/*
// JWT

"HEADERS.PAYLOAD.SIGN" 

const private_key = "123"; // .env -> Giovanni (64)

const headers = {
    "alg": "SHA-512",
    "iat": 123123123123,
    "issuer": "Pincopallo"
}

const payload = {
    id: 1,
    role: "admin"
}

const sign = "PRIVATE_KEY_TOKEN"

const jwt = `${base64(headers)}.${base64(payload)}.${base64(sha512(sign, private_key))}`;

// jwt -> headers ok - payload ok - sign no
// verify -> sign(private_key) -> true -> server(Giovanni)
//                             -> false

// A server(private_key) <-> B server(private_key)

"parte_1.parte_2.parte_3"

[
    {
        key: "123123",
        prevKey: "13512231",
        amount: "2001BTC",
        user: "Rachele"
    },
    {
        key: "63435r",
        prevKey: "dwefwqf",
        amount: "12BTC",
        user: "Alessandro"
    },
    {
        key: "63435r",
        prevKey: "dwefwqf",
        amount: "12BTC",
        user: "Alessandro"
    },
    {
        key: "63435r",
        prevKey: "dwefwqf",
        amount: "121BTC",
        user: "Alessandro"
    },
    {
        key: "63435r",
        prevKey: "dwefwqf",
        amount: "12BTC",
        user: "Alessandro"
    },
    {
        key: "63435r",
        prevKey: "dwefwqf",
        amount: "12BTC",
        user: "Alessandro"
    },
    {
        key: "63435r",
        prevKey: "dwefwqf",
        amount: "13BTC",
        user: "Alessandro"
    },
]
*/