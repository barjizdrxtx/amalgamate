import React from 'react'
import { Grid } from '@mui/material'
import { useRouter } from 'next/router';
import { CustomizedButton } from '../../UI/Button/CustomizedButton';
import { TableUI } from '../../UI/TableUI/TableUI';

export const EnquiryLabs = () => {

    const router = useRouter();

    const tableHead = [

        "Name",
        "Website",
        "Admin",
        "Location",
        "Contact",
        // "Actions"

    ];

    const element = [

        "name",
        "website",
        "lab_admin",
        "location",
        "phone"

    ]


    return (

        <Grid>

            <TableUI
                tableHead={tableHead}
                element={element}
                tableName="lab"
                name="enquiry/list-by-type/lab"
                doubleArray="data"
                isDoc={true} />

        </Grid>
    )
}
