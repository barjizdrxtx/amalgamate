import { FormControl, Grid, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useJwt } from '../../../hooks/useJwt'
import { BASE_URL } from '../../../url'
import { RequestDetails2 } from '../../Request/RequestDetails2'
import { CustomizedButton } from '../Button/CustomizedButton'
import * as yup from 'yup';

export const UserLayout = () => {


  axios.defaults.baseURL = BASE_URL;



  const [searchData, setSearchData] = useState();

  const token = useJwt();

  const formik = useFormik({

    initialValues: {

      client_id: '',
      reason: ''

    },

    // validationSchema: validationSchema,

    onSubmit: (values: any, e: any) => {

      // e.preventDefault()

      const axiosrequest = axios.post('request/details', {

        client_id: values.client_id,
        reason: values.reason

      },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: 'Bearer ' + token
          }
        }
      )

      // you could also use destructuring to have an array of responses
      axios.all([axiosrequest]).then(axios.spread(function (res) {


        setSearchData(res.data.result)

        localStorage.setItem("isSearch", "false")


      }));

    },
  });




  return (

    <Grid container justifyContent="center" alignItems="center" sx={{ mt: { xs: 8, md: 0 }, p: 1 }}>

      {localStorage.getItem("isSearch") === "true" ?

        <form style={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center" }} onSubmit={formik.handleSubmit}>


          <Grid lg={10} container justifyContent="space-between" alignItems="center" >

            <Grid container xs={12} sm={12} lg={4}>

              <Typography sx={{ color: "#566573", fontWeight: "bold", m: 1 }}>Reason</Typography>

              < TextField sx={{ width: "100%", mb: 2 }}
                fullWidth
                id="reason"
                name="reason"
                // label={data.label}
                multiline
                rows={4}
                value={formik.values.reason}
                type="text"
                onChange={formik.handleChange}
                error={formik.touched.reason && Boolean(formik.errors.reason)}
                helperText={formik.touched.reason && formik.errors.reason}
              />


            </Grid>

            <Grid container xs={12} sm={12} lg={4}>


              <Typography sx={{ color: "#566573", fontWeight: "bold", m: 1 }}>Client Id</Typography>

              < TextField sx={{ width: "100%", mb: 2 }}
                fullWidth
                id="client_id"
                name="client_id"
                // label={data.label}
                // multiline
                rows={1}
                value={formik.values.client_id}
                type="text"
                onChange={formik.handleChange}
                error={formik.touched.client_id && Boolean(formik.errors.client_id)}
                helperText={formik.touched.client_id && formik.errors.client_id}
              />


            </Grid>



            <Grid sx={{ bgcolor: "white" }}>

              <CustomizedButton bgcolor="green" onClick={formik.handleSubmit}>Search</CustomizedButton>

            </Grid>


          </Grid >

        </form>

        :

        <Grid>

          <Typography variant='subtitle1' sx={{ bgcolor: "#F8C471", p: 1 }}>Please Login in back for Search</Typography>

        </Grid>

      }


      <RequestDetails2 searchData={searchData} />



    </Grid >



  )
}

const validationSchema = yup.object({

  client_id: yup
    .string()
    .required('Client Id is required'),

  reason: yup
    .string()
    .required('Write a reason'),


});


