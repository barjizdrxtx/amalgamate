import React from 'react'
import { Grid } from '@mui/material'
import { useRouter } from 'next/router';
import { CustomizedButton } from '../../UI/Button/CustomizedButton';
import { TableUI } from '../../UI/TableUI/TableUI';

export const Catagory = () => {

    const router = useRouter();

    const tableHead = ["Name", "Description"];

    const element = ["name","description"]

    const actions = ["OverView", "Edit", "Delete"];

    return (

        <Grid>
{/* 
            <CustomizedButton onClick={() => router.push("/diseases/category-create")} bgColor={PRIMARY_COLOR}>Create Category</CustomizedButton> */}

            <TableUI tableName="category" tableHead={tableHead} element={element} name="diseases" actions={actions} />

        </Grid>
    )
}

