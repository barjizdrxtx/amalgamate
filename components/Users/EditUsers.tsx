import { Button, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useRouter } from 'next/router';
import { CustomizedButton } from '../UI/Button/CustomizedButton';

export const EditUsers = () => {

    const [name, setName]: any = useState();
    const [image, setImage]: any = useState();
    const [type, setType]: any = useState();
    const [link, setLink]: any = useState();

    const router = useRouter();


    const handleChange = (event: SelectChangeEvent) => {
        setType(event.target.value as string);
    };


    const [fetchedData, setFetchedData]: any = useState([])

  
    useEffect(() => {

        if (fetchedData.length < 1) {

            axios.get(`advertisement/${router.query.id}`).then((response) => {
                setFetchedData(response.data);
                setName(response.data?.full_name)
                setLink(response.data?.link)
            })
        }


    })


    const onSubmit = () => {

        const formData = new FormData();

        formData.append("full_name", name);

        formData.append("image", image)

        formData.append("type", type)

        formData.append("link", link)

        axios.patch(`advertisement`, formData)
            .then((response) => {
                console.log(response.data);
                router.push("/advertisement")
            }).catch((error) => {
                alert("error")
            })
    }

    const handleSubmitDelete = () => {

        axios.delete(`advertisement/${router.query.id}`)
            .then((response) => {
                console.log(response);
                router.push("/advertisement")
                window.location.reload();
            })
    }

    return (
        <Grid container  >

            <Grid container lg={12} >

                <Grid lg={3}>

                    <Box sx={{ m: 2 }}>

                        <Typography sx={{ width: "100%" }}>Title</Typography>

                        <TextField value={name} sx={{ width: "100%" }} id="outlined-basic" key="full_name" variant="outlined" onChange={(e) => setName(e.target.value)} />

                    </Box>

                </Grid>

                <Grid lg={3}>

                    <Box sx={{ m: 2 }}>

                        <Typography>Images</Typography>

                        <TextField sx={{ width: "100%" }} type='file' key="image" id="outlined-basic" variant="outlined" onChange={(e: any) => setImage(e.target.files[0])} />

                    </Box>

                </Grid>

                <Grid lg={3}>

                    <Box sx={{ m: 2 }}>

                        <Typography sx={{ width: "100%" }}>Type</Typography>

                        <Box sx={{ minWidth: 120 }}>
                            <FormControl fullWidth>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={type}
                                    label="Age"
                                    onChange={handleChange}
                                >
                                    <MenuItem value={'BannerAd'}>Banner Ad</MenuItem>
                                    <MenuItem value={'BigAd'}>Big Ad</MenuItem>
                                    <MenuItem value={'FooterAd'}>Footer Ad</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </Box>

                </Grid>

                <Grid lg={3}>

                    <Box sx={{ m: 2 }}>

                        <Typography sx={{ width: "100%" }}>Link</Typography>

                        <TextField value={link} sx={{ width: "100%" }} id="outlined-basic" key="full_name" variant="outlined" onChange={(e) => setLink(e.target.value)} />

                    </Box>

                </Grid>

            </Grid >


            <Box>

                <CustomizedButton bgColor="red" onClick={handleSubmitDelete} sx={{ m: 2 }}>Delete</CustomizedButton >


                <Box>

                    <CustomizedButton bgColor="#239B56" onClick={onSubmit} sx={{ m: 2 }}>Edit Advertisement</CustomizedButton >

                    <CustomizedButton bgColor="black" onClick={() => router.push('/advertisement')} sx={{ m: 2 }}>Cancel</CustomizedButton >

                </Box>

            </Box>


        </Grid >
    )
}
