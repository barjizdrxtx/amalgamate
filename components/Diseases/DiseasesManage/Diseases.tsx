import React from 'react'
import { Grid } from '@mui/material'
import { useRouter } from 'next/router';
import { CustomizedButton } from '../../UI/Button/CustomizedButton';
import { TableUI } from '../../UI/TableUI/TableUI';

export const Diseases = () => {

    const router = useRouter();

    const tableHead = [

        "Name",
    ];

    const element = [

        "name",
    
    ]

    const actions = [
        "OverView",
        // "Edit",
        // "Delete"
    ];


    return (

        <Grid>

            <CustomizedButton onClick={() => router.push("/diseases/create")} bgColor="#229954">Create Diseases</CustomizedButton>

            <TableUI tableName="diseases" tableHead={tableHead} element={element} name="diseases" actions={actions} />

        </Grid>
    )
}
