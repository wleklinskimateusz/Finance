import axios from "axios";
import {useEffect, useState} from "react";

export function useFetch(url) {
    const [data, setData] = useState(null);
    const [myState, setMyState] = useState("ready")
    useEffect(() => {
        axios.get(url)
            .then((response) => {
                setMyState("fetching")
                setData(response.data)
            })
            .finally(() => setMyState("finished"));
    }, [url]);
    return [data, myState]
}