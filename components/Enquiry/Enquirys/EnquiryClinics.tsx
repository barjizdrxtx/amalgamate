import React from 'react'
import { Grid } from '@mui/material'
import { useRouter } from 'next/router';
import { CustomizedButton } from '../../UI/Button/CustomizedButton';
import { TableUI } from '../../UI/TableUI/TableUI';
import { useThemeColor } from '../../../hooks/useThemeColor';

export const EnquiryClinics = () => {

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
        "clinic_admin_name",
        "location",
        "clinic_contact_no"

    ]

    return (

        <Grid>

            <TableUI
                tableHead={tableHead}
                element={element}
                tableName="Clinics"
                name='enquiry/list-by-type/clinics'
                nestedArray={true}
                disableActions={true}
                disableImage={true}
            />

        </Grid>
    )
}

