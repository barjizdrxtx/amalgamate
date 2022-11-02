import { Box, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/router'
import React from 'react'
import { useQueryFetchId } from '../../../hooks/useQueryFetch'

const index = () => {

    const router = useRouter();

    const { id } = router.query;

    const { fetchedData: data } = useQueryFetchId("doctors", id)

    const doctors = data?.result



    const doctorsDetails = [

        "name",

        // "specialisedIn": [
        //     {
        //         "specialization": "string",
        //         "years_of_experiance": 0,
        //         "qualifications": "string"
        //     }
        // ],

        "registration_number",
        "email",
        "mobile",

        // "alternate_mobile_numbers": [
        //     "string"
        // ],

        // "address": {
        //     "address1": "string",
        //     "address2": "string",
        //     "city": "string",
        //     "district": "string",
        //     "state": "string"
        // },

        "location",

        "latitude_longitude",

        "gender",

        "years_of_experience",

        "dateOfBirth",

        "qualificaton",

        // "certificates": [
        //     {
        //         "document_id": "string",
        //         "document_name": "string",
        //         "document_location": "string"
        //     }
        // ],

        // "profileText": {
        //     "short_profile": "string",
        //     "academic_architecture": "string",
        //     "professional_contributions": "string",
        //     "affliation": "string",
        //     "badge": "string",
        //     "success_stories": "string"
        // },

        "practice",

        "is_authorized",

        // "id_proof": [
        //     {
        //         "document_id": "string",
        //         "document_name": "string",
        //         "document_location": "string"
        //     }
        // ],

        "specilized_tag",

        // "languages_spoken": [
        //     "string"
        // ],

        "consultation_fee",

    ]

    return (

        <Grid>

            {doctors?.images.map((img: any) =>

                <img src={img.image} />

            )}



            {doctorsDetails.map(data =>

                <Box sx={{ display: "flex", justifyContent: "start", m: 1 }}>

                    <Typography sx={{ textTransform: "uppercase", fontWeight: "bold", flex: 1 }}>{data} :</Typography>

                    <Typography sx={{ flex: 1 }}> {doctors?.[data]}</Typography>

                </Box>

            )
            }


        </Grid >


    )
}

export default index