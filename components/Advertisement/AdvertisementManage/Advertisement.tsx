import React from 'react'
import { Grid } from '@mui/material'
import { useRouter } from 'next/router';
import { CustomizedButton } from '../../UI/Button/CustomizedButton';
import { TableUI } from '../../UI/TableUI/TableUI';
import { useThemeColor } from '../../../hooks/useThemeColor';

export const Advertisement = () => {

    const router = useRouter();

    const themecolor = useThemeColor();

    const tableHead = [

        "heading",
        "sub_heading",
        "url",

    ];

    const element = [

        "heading",
        "sub_heading",
        "url",
    ]

    const actions = [
        "Edit",
        "Delete"
    ];


    return (

        <Grid>

            <CustomizedButton onClick={() => router.push("/advertisement/create")} bgColor={themecolor}>Create Advertisement</CustomizedButton>

            <TableUI tableName="advertisement" tableHead={tableHead} element={element} name="advertisement"
                actions={actions} disableImage={true} />

        </Grid>

    )
}
