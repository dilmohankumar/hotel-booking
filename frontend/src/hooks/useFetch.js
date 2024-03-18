import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        let isMounted = true; // To check if the component is still mounted

        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch(url);

                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }

                const result = await res.json();
                console.log(`result`,result)

                if (isMounted) {
                    setData(result.data);
                    setLoading(false);
                }
            } catch (err) {
                if (isMounted) {
                    setError(err.message);
                    setLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            // Cleanup function to cancel any ongoing requests
            isMounted = false;
        };

    }, [url]);

    return {
        data,
        error,
        loading,
    };
};

export default useFetch;
