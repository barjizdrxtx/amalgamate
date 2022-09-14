import React from 'react'
import { Grid } from '@mui/material'
import { useRouter } from 'next/router';
import { TableUI } from '../../../UI/TableUI/TableUI';
import { CustomizedButton } from '../../../UI/Button/CustomizedButton';


export const Doctors = () => {

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

            <CustomizedButton onClick={() => router.push({ pathname: `/clinics/doctors/create`, query: { clin: "632178ac0ea16e0064188c37" } })} bgColor="#229954">Create Doctors</CustomizedButton>

            <TableUI tableHead={tableHead} element={element} name="doctors"  />

        </Grid >
    )
}
