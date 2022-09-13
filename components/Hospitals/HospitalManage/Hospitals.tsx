import React from 'react'
import { Grid } from '@mui/material'
import { useRouter } from 'next/router';
import { CustomizedButton } from '../../UI/Button/CustomizedButton';
import { TableUI } from '../../UI/TableUI/TableUI';

export const Hospitals = () => {

    const router = useRouter();

    const tableHead = [

        "Image",
        "Name",
        "Website",
        "Discription",
        "Hospital Email",
        "Hospital Contact",
        "Actions"

    ];

    const element = [

        "name",
        "website",
        "description",
        "hospital_email",
        "hospital_contact_no"

    ]

    return (

        <Grid>

            <CustomizedButton onClick={() => router.push("/hospitals/create")} bgColor="#229954">Create Hospital</CustomizedButton>

            <TableUI tableHead={tableHead} element={element} name="hospitals" />

        </Grid>
    )
}
