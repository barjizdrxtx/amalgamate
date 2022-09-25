import React from 'react'
import { Box, Button, Grid, Modal, Typography } from '@mui/material'
import { useRouter } from 'next/router';
import { CustomizedButton } from '../../UI/Button/CustomizedButton';
import { TableUI } from '../../UI/TableUI/TableUI';

export const LabsTestLab = () => {

    const router = useRouter();

    const { institution_id } = router.query;

    console.log("institution_id", institution_id)

    const tableHead = [


        "test_name",
        "Website",
        "Admin",
        "Location",
        "Contact",

    ];

    const element = [

        "test_name",
        "website",
        "lab_admin_name",
        "location",
        "lab_contact_no"

    ]

    const actions = [
        "OverView",
        "Edit",
        "Delete"
    ];


    return (

        <Grid>

            <CustomizedButton onClick={() =>

                router.push({ pathname: `/lab/add-test/create`, query: { institution_id: institution_id } })}

                 bgColor="#229954">Add LabTest to Lab</CustomizedButton>

            <TableUI tableName="labs" tableHead={tableHead} element={element} name={`lab-labtests/${institution_id}`} actions={actions} />

        </Grid>
    )
}
