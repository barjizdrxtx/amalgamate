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

            <CustomizedButton onClick={() => router.push("/diseases/category-create")} bgColor="#229954">Create Category</CustomizedButton>

            <TableUI tableName="category" tableHead={tableHead} element={element} name="diseases" actions={actions} />

        </Grid>
    )
}

