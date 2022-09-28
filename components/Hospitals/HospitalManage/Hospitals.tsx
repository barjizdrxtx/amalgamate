import React from 'react'
import { Grid } from '@mui/material'
import { useRouter } from 'next/router';
import { CustomizedButton } from '../../UI/Button/CustomizedButton';
import { TableUI } from '../../UI/TableUI/TableUI';
import { PRIMARY_COLOR } from '../../../utls/colors';

export const Hospitals = () => {

    const router = useRouter();

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
        "hospital_admin_name",
        "location",
        "hospital_contact_no"

    ]

    const actions = [
        "OverView",
        "Doctors",
        "Edit",
        "Delete"
    ];

    return (

        <Grid>

            <CustomizedButton onClick={() => router.push("/hospitals/create")} bgColor={PRIMARY_COLOR}>Create Hospital</CustomizedButton>

            <TableUI tableName="hospitals" tableHead={tableHead} element={element} name="hospitals" actions={actions} />

        </Grid>
    )
}
