import { Checkbox, FormControlLabel, FormGroup, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { Box } from '@mui/system';

export const InstallionDetails = (props: any) => {

    const { list, formik,
        erp,
        setErp,

        pos,
        setPos,

        erp_pos,
        setErpPos,

    } = props;

    return (

        <Grid container justifyContent="center" xl={12}>

            <form onSubmit={formik.handleSubmit}>

                <Grid container lg={12} alignItems="center">

                    {list.map((data: any, index: any) =>

                        <Grid key={index} xs={12} sm={6} lg={4}>

                            <Box key={index} sx={{ m: 1, display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start" }}>

                                <Box sx={{ mb: 1, flex: 1, display: "flex", justifyContent: "center" }}>

                                    <Typography sx={{ color: "#566573", fontWeight: "bold" }}>{data.title}</Typography>

                                </Box>

                                < TextField sx={{ flex: 2, width: "100%", mb: 2 }}
                                    fullWidth
                                    id={data.label}
                                    name={data.label}
                                    // label={data.label}
                                    value={data.value}
                                    type={data.type}
                                    onChange={formik.handleChange}
                                    error={data.touched && Boolean(data.errors)}
                                    helperText={data.touched && data.errors}
                                />

                            </Box>

                        </Grid>
                    )}

                    <Grid container lg={4}>

                        <FormGroup>

                            <FormControlLabel control={<Checkbox checked={erp} sx={{ m: 1 }} onClick={() => setErp(!erp)} />} label="ERP" />

                        </FormGroup>

                    </Grid>

                    <Grid container lg={4}>

                        <FormGroup>

                            <FormControlLabel control={<Checkbox checked={pos} sx={{ m: 1 }} onClick={() => setPos(!pos)} />} label="POS" />

                        </FormGroup>

                    </Grid>

                    <Grid container lg={4}>

                        <FormGroup>

                            <FormControlLabel control={<Checkbox checked={erp_pos} sx={{ m: 1 }} onClick={() => setErpPos(!erp_pos)} />} label="ERP/POS" />

                        </FormGroup>

                    </Grid>

                </Grid>

            </form >

        </Grid >

    )
}