import axios from "axios";
import { useQuery } from '@tanstack/react-query'
import { BASE_URL } from "../url";

export const useQueryFetch = (url: any) => {

    const token = typeof window === "undefined" ? null : localStorage.getItem("authToken");

    const { isLoading, error, data: fetchedData, refetch: refetch, isPaused: isPaused } = useQuery([url], () =>

        fetch(BASE_URL + url, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            }
        }).then(res =>
            res.json()
        )
    )

    return { fetchedData, refetch, isPaused }
}


export const useQueryFetchId = (url: any, id: any) => {

    const token = typeof window === "undefined" ? null : localStorage.getItem("authToken");

    const { isLoading, error, data: fetchedData, refetch: refetch } = useQuery([url, id,
        { refetchOnWindowFocus: true, }], () =>
        fetch(`${BASE_URL + url + '/' + id}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token
            }
        }).then(res =>
            res.json()
        )
    )

    return { fetchedData, refetch }
}

export const useQueryFetchParams = (url: any, id: any) => {

    const { isLoading, error, data: fetchedData } = useQuery([url, id], () =>

        fetch(`${BASE_URL + url + id}`).then(res =>

            res.json()
        )
    )

    return { fetchedData }
}