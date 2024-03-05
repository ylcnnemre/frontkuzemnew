import { useState, useEffect } from "react";
import { fetcher } from "../api/axiosInstance";
import { useCallback } from "react";

const useFetch = (url, params = {}) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const filteredParams = Object.keys(params).reduce((acc, key) => {
        if (
            params[key] !== null &&
            params[key] !== undefined &&
            params[key] !== "" &&
            params[key] !== "undefined" &&
            params[key] !== "null"
        ) {
            acc[key] = params[key];
        }
        return acc;
    }, {});

    const string_params = new URLSearchParams(filteredParams).toString();
    const req_url = string_params ? `${url}?${string_params}` : url;

    const fetchData = useCallback(async () => {
        setIsLoading(true);

        try {
            const res = await fetcher(req_url);
            let responseData = [];

            if ((Array.isArray(res) || typeof res === "object") && !res.message) {
                responseData = res;
            } else if (res && res.message) {
                responseData = res.data;
            } else if (res && res.message && !res.data) {
                responseData = [];
            }
            setData(responseData);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
        }
    }, [req_url]);

    useEffect(() => {
        if (url) {
            fetchData();
        }
    }, [fetchData]);

    return { data, isLoading, revalidate: fetchData };
};

export default useFetch;
