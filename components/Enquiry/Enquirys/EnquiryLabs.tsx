import React from 'react'
import { Grid } from '@mui/material'
import { useRouter } from 'next/router';
import { CustomizedButton } from '../../UI/Button/CustomizedButton';
import { TableUI } from '../../UI/TableUI/TableUI';

export const EnquiryLabs = () => {

    const router = useRouter();

    const tableHead = [

        "Image",
        "Name",
        "Website",
        "Clinic Admin Name",
        "Location",
        "Clinic Contact",
        "Actions"

    ];

    const element = [

        "name",
        "website",
        "clinic_admin_name",
        "location",
        "clinic_contact_no"

    ]

    return (

        <Grid>

            <TableUI
                tableHead={tableHead}
                element={element}
                name="enquiry/list-by-type/lab"
                doubleArray="data"
                isDoc={true} />

        </Grid>
    )
}
