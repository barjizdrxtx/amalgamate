import React from 'react'
import { Grid } from '@mui/material'
import { useRouter } from 'next/router';
import { CustomizedButton } from '../../UI/Button/CustomizedButton';
import { TableUI } from '../../UI/TableUI/TableUI';

export const EnquiryDoctors = () => {

    const router = useRouter();

    const tableHead = [

        "Name",
        "Specialised In",
        "Qualification",
        "Email",
        "Mobile",
        // "Actions"

    ];

    const element = [

        "name",
        "specialisedIn",
        "qualification",
        "email",
        "mobile",

    ]

    return (

        <Grid>

            <TableUI
                tableHead={tableHead}
                element={element}
                tableName="Doctors"
                name="enquiry/list-by-type/doctors"
                nestedArray={true}
                disableActions={true}
                disableImage={true}
            />


        </Grid>
    )
}
