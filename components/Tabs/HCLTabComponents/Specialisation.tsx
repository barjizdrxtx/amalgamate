import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import ImageIcon from '@mui/icons-material/Image';
import { CustomizedButton } from '../../UI/Button/CustomizedButton';
import axios from 'axios';

export const Specialisation = (props: any) => {

  const { tabList, formik, specialities, setSpecialities } = props;

  

  const handleChangeInput = (index: any, event: any) => {
    const values = [...specialities]
    values[index][event.target.name] = event.target.value
    setSpecialities(values)
  }


  const handleAddFields = () => {
    setSpecialities([...specialities, { id: specialities.length + 1 }])

  }

  const handleRemoveFields = () => {
    setSpecialities((specialities: any) => specialities.filter((_: any, i: any) => i !== specialities.length - 1))
  }

  return (

    <Grid container lg={12} sx={{ backgroundColor: "white" }}>

      <Grid container lg={12}>

        {specialities.map((add: any, index: any) =>

          <Grid key={index} lg={6}>

            <Box sx={{ m: 1, display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start" }}>

              <Box sx={{ mb: 1, flex: 1, display: "flex", justifyContent: "center" }}>

                <Typography>Specialities {index + 1}</Typography>

              </Box>

              <TextField sx={{ flex: 1, width: "100%" }} defaultValue={specialities[index].specialities}
                name="specialities"
                onChange={(event: any) => handleChangeInput(index, event)} />


            </Box>

          </Grid>

        )}


      </Grid>

      <Grid>

        <Box sx={{ display: "flex" }}>
          <CustomizedButton bgColor="dodgerblue" onClick={handleAddFields}>add</CustomizedButton>{specialities.length > 1
            && <CustomizedButton bgColor="black" onClick={handleRemoveFields}>remove</CustomizedButton>
          }

        </Box>
      </Grid>

    </Grid>
  )
}
