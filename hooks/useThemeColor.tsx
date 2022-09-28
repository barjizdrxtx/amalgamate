import React from 'react'
import { useSelector } from 'react-redux';


export const useThemeColor = () => {

    const themecolor = useSelector((state: any) => state.features.themeColor.payload)

    return themecolor
}
