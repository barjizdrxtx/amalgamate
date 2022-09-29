import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import { TabHome } from './TabHome';

export const PreviewDisease = (props: any) => {

    const { overview, setOverView, symptoms, setSymptoms,
        causes, setCauses, complications, setComplications,
        home_remadies, setHome_remadies, diet_and_nutrition,
        setDiet_and_nutrition, faq, setFaq } = props;


    return (
        <Grid container justifyContent="center" md={12}>

            <Grid container justifyContent="center" md={9}>

                <Box>

                    <Typography variant='h5' fontWeight="bold" sx={{ backgroundColor: "#7DCEA0", p: 1, color: "white" }}>Disease</Typography>

                    <TabHome

                        overview={overview}
                        setOverView={setOverView}

                        symptoms={symptoms}
                        setSymptoms={setSymptoms}

                        causes={causes}
                        setCauses={setCauses}

                        complications={complications}
                        setComplications={setComplications}

                        home_remadies={home_remadies}
                        setHome_remadies={setHome_remadies}

                        diet_and_nutrition={diet_and_nutrition}
                        setDiet_and_nutrition={setDiet_and_nutrition}

                        faq={faq}
                        setFaq={setFaq} />

                </Box>

            </Grid >

        </Grid >
    )
}

