import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'

export const useJwt = () => {

    const ISSERVER = typeof window === "undefined";

    const [token, setToken]: any = useState(null);

    useEffect(() => {


        if (!ISSERVER) {

            setToken(localStorage.getItem("authToken"))

        }


    }, [])

    return token;
}
