import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { Login } from "../Auth/login"

export const ProtectedRoutes = (props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }) => {

    const ISSERVER = typeof window === "undefined";


    const [token, setToken]: any = useState(false);

    console.log("token", token)


    useEffect(() => {


        if (!ISSERVER) {

            setToken(localStorage.getItem("authToken"))

        }

    }, [])


    return (

        <div>


            {token != null ? props.children : < Login />}



        </div>

    )
}
