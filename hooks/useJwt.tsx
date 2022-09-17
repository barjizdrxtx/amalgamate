import React from 'react'

export const useJwt = () => {

    const token = localStorage.getItem("authToken");

    return token
}
