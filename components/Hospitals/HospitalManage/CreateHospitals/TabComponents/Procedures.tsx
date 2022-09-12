

import { Box, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { CustomizedButton } from '../../../../UI/Button/CustomizedButton';

export const Procedures = (props: any) => {

  const { tabData4, formik } = props;



  const [inputfield, setInputField]: any = useState([{ id: 1 }]);


  const handleChangeInput = (index: any, event: any) => {
    const values = [...inputfield]
    values[index][event.target.name] = event.target.value
    setInputField(values)
  }


  const handleAddFields = () => {

    setInputField([...inputfield, { id: inputfield.length + 1 }])
    console.log(inputfield)

  }

  const handleRemoveFields = () => {
    setInputField((inputfield: any) => inputfield.filter((_: any, i: any) => i !== inputfield.length - 1))
  }

  return (

    <Grid container lg={12} sx={{ backgroundColor: "white" }}>

      {tabData4.map((data: any) =>

        <Grid lg={12}>

          <Box sx={{ m: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>

            <Box sx={{ mb: 1, flex: 1, display: "flex", justifyContent: "center" }}>

              <Typography>{data.title}</Typography>

            </Box>


            <Box>
              {inputfield.map((add: any) => <Box>

                < TextField sx={{ flex: 4, width: "100%", mb: 2 }}
                  fullWidth
                  id="outlined-multiline-static"
                  multiline
                  rows={data.rows}
                  name={data.label}
                  // label={data.label}
                  value={data.value}
                  type={data.type}
                  onChange={formik.handleChange}
                  error={data.touched && Boolean(data.errors)}
                  helperText={data.touched && data.errors}
                />  </Box>
              )}

            </Box>
          </Box>
          <Box sx={{ display: "flex" }}>
            <CustomizedButton bgColor="dodgerblue" onClick={handleAddFields}>add</CustomizedButton>{inputfield.length > 1
              && <CustomizedButton bgColor="black" onClick={handleRemoveFields}>remove</CustomizedButton>
            }

          </Box>


        </Grid>
      )}

    </Grid>
  )
}
