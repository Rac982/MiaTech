import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        if (!loading) setLoading(true);
        if (error) setError("");

        try {
            const response = await fetch(url, { method: "GET" });

            if (response.ok) {
                const jsonData = await response.json();
                setData(jsonData);
            } else {
                throw new Error("Error during data fetching, please try again later");
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [url]);

    return { data, loading, error };
};