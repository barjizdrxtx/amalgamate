import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { Login } from "../Auth/login"
import jwt_decode from 'jwt-decode';
import { useJwt } from '../../hooks/useJwt';

export const ProtectedRoutes = (props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined }) => {

    const token = useJwt();

    var dateNow = new Date();

    const decoded: any = token === null ? null : jwt_decode(token)

    return (

        <div>

            {decoded?.exp * 1000 > dateNow.getTime() === false || token === null ? < Login /> : props.children}


        </div>

    )
}
