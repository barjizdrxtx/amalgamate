import React from 'react'
import { Grid } from '@mui/material'
import { useRouter } from 'next/router';
import { CustomizedButton } from '../../UI/Button/CustomizedButton';
import { TableUI } from '../../UI/TableUI/TableUI';

export const EnquiryHospitals = () => {

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
        "hospital_admin_name",
        "location",
        "hospital_contact_no"

    ]


    return (

        <Grid>

            <TableUI
                tableHead={tableHead}
                element={element}
                tableName="Hospitals"
                name="enquiry/list-by-type/hospitals"
                nestedArray={true}
                disableActions={true}
                disableImage={true}
            />

        </Grid>
    )
}
