import { Box, Grid, TextField, Typography } from '@mui/material';
import React from 'react'
import { CustomizedButton } from '../../../../UI/Button/CustomizedButton';

export const Faq = (props: any) => {

  const { faq, setFaq } = props;

  const handleChangeInput = (index: any, event: any) => {
    const values = [...faq]
    values[index][event.target.name] = event.target.value
    setFaq(values)
  }


  const handleAddFields = () => {

    setFaq([...faq, { id: faq.length + 1, title: "", description: "" }])


  }

  const handleRemoveFields = () => {
    setFaq((faq: any) => faq.filter((_: any, i: any) => i !== faq.length - 1))
  }


  return (

    <Grid container lg={12} sx={{ backgroundColor: "white" }}>


      <Grid lg={12}>

        {faq.map((add: any, index: any) =>

          <Box sx={{
            width: "100%", display: "flex", flexDirection: "column",
            justifyContent: "center", alignItems: "center", backgroundColor: "white"
          }}>

            <Box sx={{ width: "100%", m: 1, display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start" }}>


              <Typography >Faq Title {index + 1}</Typography>

              < TextField sx={{ width: "50%", my: 2 }}
                id="name"
                name="title"
                onChange={(event) => handleChangeInput(index, event)} />

            </Box>



            <Box sx={{ width: "100%", m: 1, display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "start" }}>


              <Typography sx={{ flex: 1 }}>Faq Description {index + 1}</Typography>

              < TextField sx={{ width: "50%", my: 2 }}
                id="outlined-multiline-static"
                multiline
                rows={6}
                name="description"
                onChange={(event) => handleChangeInput(index, event)} />

            </Box>

          </Box>


        )}


      </Grid>


      <Grid>

        <Box sx={{ display: "flex" }}>
          <CustomizedButton bgColor="dodgerblue" onClick={handleAddFields}>add</CustomizedButton>{faq.length > 1
            && <CustomizedButton bgColor="black" onClick={handleRemoveFields}>remove</CustomizedButton>
          }

        </Box>
      </Grid>


    </Grid>
  )
}
