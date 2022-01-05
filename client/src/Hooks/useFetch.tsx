import axios from "axios";
import {useEffect, useState} from "react";

export function useFetch(url: string) {
    const [data, setData] = useState<any>(undefined);
    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setData(response.data)
            })
    }, [url]);
    return data
}