import { Grid } from '@mui/material'
import React from 'react'
import { MultiImagePreview } from '../../../../UI/ImagePreview/ImagePreview';

const Images = (props: any) => {

    const { image, setImage } = props;

    return (

        <Grid container lg={12} sx={{ backgroundColor: "white" }}>

            <MultiImagePreview image={image} setImage={setImage} />

        </Grid>

    )
}

export default Images