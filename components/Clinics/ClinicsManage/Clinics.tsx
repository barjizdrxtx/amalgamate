import React from 'react'
import { Grid } from '@mui/material'
import { useRouter } from 'next/router';
import { CustomizedButton } from '../../UI/Button/CustomizedButton';
import { TableUI } from '../../UI/TableUI/TableUI';
import { PRIMARY_COLOR } from '../../../utls/colors';
import { useThemeColor } from '../../../hooks/useThemeColor';




export const Clinics = ({ data }: any) => {

    const router = useRouter();

    console.log("Data", data)



    return (

        <></>

    )
}


export const getServerSideProps = async () => {
    // Fetch data from external API
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
}