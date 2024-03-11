import { Checkbox, FormControlLabel, FormGroup, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
import { Box } from '@mui/system';
import { DropDown } from '../../UI/DropDown/DropDown';
import { useQueryFetch } from '../../../hooks/useQueryFetch';


export const InstallionDetails = (props: any) => {

    const { list, formik,
        softwareName,
        setSoftwareName,

        shopCategory,
        setShopCategory,

        erp,
        setErp,

        pos,
        setPos,

        erp_pos,
        setErpPos,

        isActive,
        setIsActive,

    } = props;

    const { fetchedData: fetchedData, refetch: refetch } = useQueryFetch(`request/softwares`);

    const dropData = fetchedData?.result

    // const dropData = [

    //     { name: "Amber Erp" },
    //     { name: "Amber Pos" },
    //     { name: "Zoomie" },
    //     { name: "Beauteqx" },
    //     { name: "Gozzbe" }
    // ]

    const shopCategories = [
        { id: 'Hypermarket', name: 'Hypermarket'},
        { id: 'Supermarket', name: 'Supermarket'},
        { id: 'Grocery', name: 'Grocery'},
        { id: 'Trading', name: 'Trading'},
        { id: 'Restaurant', name: 'Restaurant'},
        { id: 'Cafe', name: 'Cafe'},
        { id: 'Laundry', name: 'Laundry'},
        { id: 'Spa/Saloon', name: 'Spa/Saloon'},
        { id: 'Garrage', name: 'Garrage'},
        { id: 'Parts Shop', name: 'Parts Shop'},
        { id: 'FMCG', name: 'FMCG'},
    ]
    

    return (

        <Grid container justifyContent="center" xl={12}>

            <form onSubmit={formik.handleSubmit}>

                <Grid container lg={12} alignItems="center">

                    <Grid container xs={12} sm={6} lg={4}>

                        <DropDown text="Software Name" value={softwareName} setValue={setSoftwareName} dropData={dropData} id="name" name="name" />

                    </Grid>

                    <Grid container xs={12} sm={6} lg={4}>

                        <DropDown text="Shop Category" value={shopCategory} setValue={setShopCategory} dropData={shopCategories} id="name" name="name" />

                    </Grid>

                    {list.map((data: any, index: any) =>

                        <Grid key={index} xs={12} sm={6} lg={4}>

                            <Grid sx={{ m: 1 }}>

                                <Typography sx={{ color: "#566573", fontWeight: "bold" }}>{data.title}</Typography>

                                < TextField sx={{ width: "100%", my: 1 }}
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

                            </Grid>

                        </Grid>
                    )}

                    <Grid container lg={4}>

                        <FormGroup>

                            <FormControlLabel control={<Checkbox checked={isActive} sx={{ m: 1 }} onClick={() => setIsActive(!isActive)} />} label="IS ACTIVE" />

                        </FormGroup>

                    </Grid>

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