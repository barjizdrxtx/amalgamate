import { Grid, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useJwt } from '../../../hooks/useJwt'
import { BASE_URL } from '../../../url'
import { RequestDetails2 } from '../../Request/RequestDetails2'
import { CustomizedButton } from '../Button/CustomizedButton'
import * as yup from 'yup';
import Box from '@mui/material/Box'

export const UserLayout = () => {


  axios.defaults.baseURL = BASE_URL;

  const [id, setSearchResult] = useState('');

  const [client_id, setClientId] = useState();

  const [reason, setReason] = useState();

  const [searchData, setSearchData] = useState();

  const token = useJwt();

  const formik = useFormik({

    initialValues: {

      client_id: '',
      reason: ''

    },

    validationSchema: validationSchema,

    onSubmit: (values: any) => {

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


      }));

    },
  });




  const list = [

    {
      title: "Reason",
      label: "reason",
      type: "text",
      value: formik.values.reason,
      touched: formik.touched.reason,
      errors: formik.errors.reason,
      rows: 2
    },
    
    {
      title: "Client Id",
      label: "client_id",
      type: "text",
      value: formik.values.client_id,
      touched: formik.touched.client_id,
      errors: formik.errors.client_id,
      rows: 1
    },

  ]

  return (

    <Grid container justifyContent="center" alignItems="center">

      <form onSubmit={formik.handleSubmit}>

        <Grid container justifyContent="space-between" alignItems="center" >

          {list.map((data: any, index: any) =>

            <Grid container key={index} xs={12} sm={12} lg={4}>

              <Typography sx={{ color: "#566573", fontWeight: "bold", m: 1 }}>{data.title}</Typography>

              < TextField sx={{ width: "100%", mb: 2 }}
                fullWidth
                id={data.label}
                name={data.label}
                // label={data.label}
                multiline
                rows={data.rows}
                value={data.value}
                type={data.type}
                onChange={formik.handleChange}
                error={data.touched && Boolean(data.errors)}
                helperText={data.touched && data.errors}
              />

            </Grid>
          )}

          <Grid sx={{ bgcolor: "white" }}>


            <CustomizedButton bgcolor="green" onClick={formik.handleSubmit}>Search</CustomizedButton>


          </Grid>


        </Grid >

      </form>

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


