import { Box, Grid, TextField, Typography } from '@mui/material';
import React from 'react'
import { CustomizedButton } from '../../../../UI/Button/CustomizedButton';

export const Faq = (props: any) => {

  const { faq, setFaq } = props;


  console.log("inputfield", faq)

  const handleChangeInput = (index: any, event: any) => {
    const values = [...faq]
    values[index][event.target.name] = event.target.value
    setFaq(values)
  }


  const handleAddFields = () => {

    setFaq([...faq, { id: faq.length + 1, title: "", description: "" }])
    console.log(faq)

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
            justifyContent: "center", alignItems: "center"
          }}>

            <Box sx={{
              width: "100%", display: "flex", justifyContent: "center", alignItems: "center"
            }}>


              <Typography sx={{ flex: 1 }}>Faq Title {index + 1}</Typography>

              < TextField sx={{ flex: 4, width: "100%", mb: 2 }}
                id="name"
                name="title"
                onChange={(event) => handleChangeInput(index, event)} />

            </Box>



            <Box sx={{
              width: "100%", display: "flex", justifyContent: "center", alignItems: "center"
            }}>

              <Typography sx={{ flex: 1 }}>Faq Description {index + 1}</Typography>


              < TextField sx={{ flex: 4, width: "100%", mb: 2 }}
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
