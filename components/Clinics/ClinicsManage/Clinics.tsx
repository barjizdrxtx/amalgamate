import React from 'react'
import { Grid } from '@mui/material'
import { useRouter } from 'next/router';
import { CustomizedButton } from '../../UI/Button/CustomizedButton';
import { TableUI } from '../../UI/TableUI/TableUI';

export const Clinics = () => {

    const router = useRouter();

    const tableHead = [

        "Image",
        "Name",
        "Website",
        "Discription",
        "Clinic Email",
        "Clinic Contact",
        "Actions"

    ];

    const element = [

        "name",
        "website",
        "description",
        "clinic_email",
        "clinic_contact_no"

    ]

    return (

        <Grid>

            <CustomizedButton onClick={() => router.push("/clinics/create")} bgColor="#229954">Create Clinic</CustomizedButton>

            <TableUI tableHead={tableHead} element={element} name="clinics" isDoc={true} />

        </Grid>
    )
}
