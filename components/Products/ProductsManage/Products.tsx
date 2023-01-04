import React from 'react'
import { Grid } from '@mui/material'
import { useRouter } from 'next/router';
import { CustomizedButton } from '../../UI/Button/CustomizedButton';
import { TableUI } from '../../UI/TableUI/TableUI';
import { useThemeColor } from '../../../hooks/useThemeColor';

export const Products = () => {

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
        "Edit",
        "Delete"
    ];


    return (

        <Grid>

            <CustomizedButton onClick={() => router.push("/products/create")} bgColor={themecolor}>Create Products</CustomizedButton>

            <TableUI tableName="products" tableHead={tableHead}
                element={element} name="products" actions={actions} disableImage={true} />

        </Grid>

    )
}
