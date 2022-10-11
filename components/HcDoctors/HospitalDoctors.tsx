import React from 'react'
import { Grid } from '@mui/material'
import { useRouter } from 'next/router';
import { TableUI } from '../UI/TableUI/TableUI';
import { CustomizedButton } from '../UI/Button/CustomizedButton';
import { useThemeColor } from '../../hooks/useThemeColor';


export const HospitalDoctors = () => {

    const router = useRouter();


    const themecolor = useThemeColor();


    const { institution_id } = router.query

    const tableHead = [

        "Name",
        "Registration Number",
        "Qualification",
        "Email",
        "Mobile",

    ];

    const element = [

        "name",
        "registration_number",
        "qualification",
        "email",
        "mobile"

    ]

    const actions = [
        "OverView",
        "Edit",
        "Delete"
    ];


    return (

        <Grid>

            <CustomizedButton onClick={() => router.push({ pathname: `/hospitals/doctors/create`, query: { institution_id: institution_id } })} bgColor={themecolor}>Create Doctors</CustomizedButton>

            <TableUI tableName="doctors" tableHead={tableHead} element={element} name={`clinics/doctors-list/${institution_id}`} actions={actions} />

        </Grid>
    )
}
