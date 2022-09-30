import React from 'react'
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { useQueryFetch } from '../hooks/useQueryFetch';
import Person2Icon from '@mui/icons-material/Person2';
import ScienceIcon from '@mui/icons-material/Science';
import VaccinesIcon from '@mui/icons-material/Vaccines';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';

function index() {



  const { fetchedData: doctors } = useQueryFetch('enquiry/list-by-type/doctors');

  const { fetchedData: clinics } = useQueryFetch('enquiry/list-by-type/clinics');

  const { fetchedData: lab } = useQueryFetch('enquiry/list-by-type/lab');

  const { fetchedData: hospitals } = useQueryFetch('enquiry/list-by-type/hospitals');

  const { fetchedData: enquiry } = useQueryFetch('enquiry');




  const dashboardGrid = [

    {
      title: "Total Active Doctor",
      color: "green",
      icon: Person2Icon,
      totalNumbers: doctors?.result.length
    },
    {
      title: "Total Active Clinics",
      color: "orange",
      icon: VaccinesIcon,
      totalNumbers: clinics?.result.length
    },
    {
      title: "Total Active Labs",
      color: "dodgerblue",
      icon: ScienceIcon,
      totalNumbers: lab?.result.length
    },
    {
      title: "Total Active Hospitals",
      color: "red",
      icon: LocalHospitalIcon,
      totalNumbers: hospitals?.result.length
    },
    {
      title: "Total Enquiry",
      color: "purple",
      icon: ThumbUpAltIcon,
      totalNumbers: enquiry?.length

    },

  ]



  return (

    <Grid justifyContent="center" >

      <Grid container item lg={12}>

        {dashboardGrid.map((data, index) =>

          <Grid key={index} item lg={3}>

            <Box sx={{
              m: 2, display: 'flex', alignItems: "center",
              justifyContent: "center",
              borderRadius: "10px",
              boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px"
            }}>

              <Box sx={{ width: "100%", display: "flex", justifyContent: "space-around", p: 1 }}>

                <Box>

                  <Typography sx={{ color: "black" }}>{data.title}</Typography>

                  <Typography variant='h5' sx={{ fontWeight: "bold", my: 1 }}>{data.totalNumbers}</Typography>

                </Box>

                <Box>

                  <data.icon sx={{ fontSize: "4rem", color: data.color, cursor: "pointer" }} />

                </Box>

              </Box>

            </Box>

          </Grid>
        )
        }

      </Grid >

    </Grid >
  )
}

export default index