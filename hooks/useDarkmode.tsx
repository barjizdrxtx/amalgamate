import React from 'react'
import { useSelector } from 'react-redux';


export const useDarkmode = () => {

    const darkmode = useSelector((state: any) => state.features.darkmode.payload)

    return darkmode
}
