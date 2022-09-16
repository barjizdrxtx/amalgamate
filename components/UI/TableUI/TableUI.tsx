import { Box, Grid, IconButton, OutlinedInput, Pagination, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import style from "../../../styles/TableUI.module.css"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import FilterListIcon from '@mui/icons-material/FilterList';
import axios from 'axios';
import { useQueryFetch } from '../../../utils/useQueryFetch';
import { useRouter } from 'next/router';
import BadgeIcon from '@mui/icons-material/Badge';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export const TableUI = (props: any) => {


  const { tableHead, element, name, isDoc, doubleArray } = props;


  const { fetchedData: tableData, refetch: refetch } = useQueryFetch(name);

  const [bool, setBool] = useState([]);


  const Open = (index: any) => {

    let newArray: any = [...bool]

    newArray[index] = !newArray[index];

    setBool(newArray)

  }

  const router = useRouter()

  const handleSubmitDelete = (data: any) => {

    axios.delete(`${name}/${data}`)
      .then((response) => {
        console.log(response);
        refetch();
      })
  }


  return (

    <Grid>

      <Box sx={{
        backgroundColor: "white",
        boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
        borderRadius: "20px", p: 2
      }}>


        <Box sx={{ py: 3 }}>

          <OutlinedInput placeholder="Search" />

          <IconButton>

            <FileUploadIcon />

          </IconButton>


          <IconButton>

            <FilterListIcon />

          </IconButton>


        </Box>


        <table id={style.table}>

          <tr>
            {tableHead.map((data: any) =>

              <th>{data}</th>

            )}
          </tr>

          {tableData?.result?.map((data: any, index: any) =>

            <tr onClick={() => Open(index)}>

              <td style={{ display: "flex", alignItems: "center" }}>

                <img style={{ width: "50px", height: "50px", borderRadius: "30%" }} src={data.image_location} />

              </td>

              {element.map((el: any) =>


                <td>

                  {doubleArray ? data["data"][el] : data[el]}

                </td>

              )}

              <td>

                <Box sx={{ display: "flex", alignItems: "center", position: "relative" }}>

                  {bool[index] === true &&

                    <Box sx={{
                      backgroundColor: "white", display: "flex", flexDirection: "column", justifyContent: "center",
                      alignItems: "center",
                      boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
                      borderRadius: "5px", width: "120px",
                      position: "absolute", top: "0", right: "0", zIndex: "100",
                    }}>

                      {isDoc && <IconButton>

                        <BadgeIcon sx={{ color: "dodgerblue" }} onClick={() => router.push({ pathname: `${name}/doctors`, query: { clin: data._id } })} />

                      </IconButton>
                      }


                      <Box onClick={() => router.push(`${name}/edit/${data._id}`)} sx={{
                        width: "100%", display: "flex", justifyContent: "start", alignItems: "center", p: 1,
                        '&:hover': {
                          backgroundColor: "lightgray"
                        }

                      }}>

                        <ModeEditOutlineOutlinedIcon sx={{ color: "green" }} />

                        <Typography variant='subtitle2' sx={{ ml: 1 }}>Edit</Typography>

                      </Box>


                      <Box onClick={() => handleSubmitDelete(data._id)} sx={{
                        width: "100%", display: "flex", justifyContent: "start", alignItems: "center", p: 1,
                        '&:hover': {
                          backgroundColor: "lightgray"
                        }
                      }}>

                        <DeleteOutlineIcon sx={{ color: "red" }} />

                        <Typography variant='subtitle2' sx={{ ml: 1 }}>Delete</Typography>

                      </Box>

                    </Box>}

                  <IconButton>

                    <MoreVertIcon onClick={() => Open(index)} />

                  </IconButton>



                </Box>

              </td>

            </tr>

          )}

        </table>

        <Box sx={{ display: "flex", justifyContent: "end", py: 2 }}>

          <Stack spacing={2}>
            <Pagination count={100} color="primary" />
          </Stack>

        </Box>

      </Box>

    </Grid >
  )
}