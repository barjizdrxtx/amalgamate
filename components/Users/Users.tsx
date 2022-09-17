import { Grid } from '@mui/material'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useQueryFetch } from '../../hooks/useQueryFetch';
import { TableUI } from '../UI/TableUI/TableUI'
import { CustomizedButton } from '../UI/Button/CustomizedButton';

export const Users = () => {


    const tableHead = [
        {
            name: "FullName", options: { filterOptions: { fullWidth: true } }
        },
        "Email",
        "Phone",
        "Gender",
        "Edit"
    ];


    const [data, setMyData]: any = useState([]);

    const router = useRouter();

    const { fetchedData: fetchedData } = useQueryFetch('patients');

    useEffect(() => {

        if (data?.length < fetchedData?.length)

            setMyData([...data, {
                FullName: fetchedData[data.length]?.full_name,
                Email: fetchedData[data.length]?.email,
                Phone: fetchedData[data.length]?.phone,
                Gender: fetchedData[data.length]?.gender,
                Edit: <CustomizedButton bgColor="green" onClick={() => router.push(`/users/edit/${fetchedData[data.length]?._id}`)}>Edit</CustomizedButton>,

            }])
    })


    return (

        <Grid>

            <TableUI title="Users" tableHead={tableHead} data={data} />

        </Grid>
    )
}
