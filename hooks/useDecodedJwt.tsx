import React from 'react'
import { useJwt } from './useJwt';
import jwt_decode from 'jwt-decode';

export const useDecodedJwt = () => {

    const token = useJwt();

    const decoded: any = token === null ? null : jwt_decode(token)

    return decoded;
}
