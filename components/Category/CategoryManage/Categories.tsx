import React from 'react'
import { Grid } from '@mui/material'
import { useRouter } from 'next/router';
import { CustomizedButton } from '../../UI/Button/CustomizedButton';
import { TableUI } from '../../UI/TableUI/TableUI';
import { useThemeColor } from '../../../hooks/useThemeColor';

export const Categories = () => {

    const router = useRouter();

    const themecolor = useThemeColor();

    const tableHead = [

        "Category"
    ];

    const element = [

        "category",

    ]

    const actions = [
        "OverView",
        "Edit",
        "Delete"
    ];


    return (

        <Grid>

            <CustomizedButton onClick={() => router.push("categories/create")} bgColor={themecolor}>Create Category</CustomizedButton>

            <TableUI tableName="categories" tableHead={tableHead}
                element={element} name="categories" actions={actions} disableImage={true} />

        </Grid>

    )
}
