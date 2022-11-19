import React from 'react'
import { Grid } from '@mui/material'
import { useRouter } from 'next/router';
import { CustomizedButton } from '../../UI/Button/CustomizedButton';
import { TableUI } from '../../UI/TableUI/TableUI';
import { useThemeColor } from '../../../hooks/useThemeColor';

export const Testimonials = () => {

    const router = useRouter();

    const themecolor = useThemeColor();

    const tableHead = [

        "Name",
        "Website",
        "Admin",
        "Location",
        "Contact",

    ];

    const element = [

        "name",
        "website",
        "clinic_admin_name",
        "location",
        "clinic_contact_no"

    ]

    const actions = [
        "OverView",
        "Doctors",
        "Edit",
        "Delete"
    ];


    return (

        <Grid>

            <CustomizedButton onClick={() => router.push("/testimonials/create")} bgColor={themecolor}>Create Testimonials</CustomizedButton>

            <TableUI tableName="testmonials" tableHead={tableHead} element={element} name="testmonials" actions={actions} />

        </Grid>

    )
}
