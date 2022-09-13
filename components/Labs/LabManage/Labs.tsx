import React from 'react'
import { Grid } from '@mui/material'
import { useRouter } from 'next/router';
import { CustomizedButton } from '../../UI/Button/CustomizedButton';
import { TableUI } from '../../UI/TableUI/TableUI';

export const Labs = () => {

    const router = useRouter();

    const tableHead = [

        "Image",
        "Name",
        "Website",
        "Discription",
        "Lab Email",
        "Lab Contact",
        "Actions"

    ];

    const element = [

        "name",
        "website",
        "description",
        "lab_email",
        "lab_contact_no"

    ]

    return (

        <Grid>

            <CustomizedButton onClick={() => router.push("/labs/create")} bgColor="#229954">Create Lab</CustomizedButton>

            <TableUI tableHead={tableHead} element={element} name="lab" />

        </Grid>
    )
}
