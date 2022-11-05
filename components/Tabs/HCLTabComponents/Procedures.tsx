import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import ImageIcon from '@mui/icons-material/Image';
import { CustomizedButton } from '../../UI/Button/CustomizedButton';
import axios from 'axios';

export const Procedures = (props: any) => {

  const { tabList, formik, procedures, setProcedures } = props;


  const handleChangeInput = (index: any, event: any) => {
    const values = [...procedures]
    values[index][event.target.name] = event.target.value
    setProcedures(values)
  }


  const handleAddFields = () => {
    setProcedures([...procedures, { id: procedures.length + 1 }])

  }

  const handleRemoveFields = () => {
    setProcedures((procedures: any) => procedures.filter((_: any, i: any) => i !== procedures.length - 1))
  }

  return (

    <Grid container lg={12} sx={{ backgroundColor: "white" }}>

      <Grid container lg={12}>

        {procedures?.map((add: any, index: any) =>


          <Grid key={index} lg={6}>

            <Box sx={{ m: 1, display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start" }}>

              <Box sx={{ mb: 1, flex: 1, display: "flex", justifyContent: "center" }}>

                <Typography sx={{ color: "#566573", fontWeight: "bold" }}>Procedures {index + 1}</Typography>

              </Box>

              <TextField sx={{ flex: 1, width: "100%" }} defaultValue={procedures[index].procedures}
                name="procedures"
                onChange={(event: any) => handleChangeInput(index, event)} />


            </Box>

          </Grid>

        )}


      </Grid>

      <Grid>

        <Box sx={{ display: "flex" }}>
          <CustomizedButton bgColor="dodgerblue" onClick={handleAddFields}>add</CustomizedButton>{procedures?.length > 1
            && <CustomizedButton bgColor="black" onClick={handleRemoveFields}>remove</CustomizedButton>
          }

        </Box>
      </Grid>

    </Grid>
  )
}
