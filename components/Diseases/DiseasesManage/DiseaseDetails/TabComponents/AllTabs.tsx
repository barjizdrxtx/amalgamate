import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import React from 'react'
import parse from 'html-react-parser';

export const AllTabs = (props: any) => {

    const { fetchedData } = props;

    console.log("fetchedDataaaa", fetchedData)

    return (

        <Grid container lg={12} sx={{ justifyContent: "center", height: "100vh" }}>

            {fetchedData?.map((data: any, index: any) =>

                <Box sx={{ width: "100%", display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start" }}>

                    <Typography sx={{ width: "100%", backgroundColor: "lightgray" }}>{fetchedData[index].title ? parse(data.title) : null}</Typography>

                    <Box sx={{ display: "flex", m: 1 }}>

                        <Box sx={{ flex: 1 }}>

                            <Typography> {fetchedData[index].description ? parse(data.description) : null}</Typography>

                        </Box>


                        {data.image && < Box sx={{ flex: 1 }}>

                            <img width="100%" src={data.image} />

                       
                        </Box>}


                    </Box>

                </Box>

            )
            }

        </Grid >
    )
}
