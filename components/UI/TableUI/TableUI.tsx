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
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { RejectPopup } from '../Popups/RejectPopup/RejectPopup';


export const TableUI = (props: any) => {


  const { tableHead, element, name, isDoc, doubleArray, tableName } = props;

  const [isPopUp, setIsPopup] = useState(false);


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

        <Typography variant='h5' sx={{ mr: 4, fontWeight: "bold", color: "#566573" }}>{tableName}</Typography>


        <Box sx={{ py: 3, display: "flex", justifyContent: "start", alignItems: "center" }}>

          <OutlinedInput placeholder="Search" />

          <IconButton>

            <FileUploadIcon />

          </IconButton>


          <IconButton>

            <FilterListIcon />

          </IconButton>


        </Box>


        {isPopUp && <RejectPopup setIsPopup={setIsPopup} />}


        <table id={style.table}>

          <tr>

            <th>No</th>

            {!doubleArray && <th>Image</th>}

            {tableHead.map((data: any) =>

              <th>{data}</th>

            )}

          </tr>

          {tableData?.result?.map((data: any, index: any) =>

            <tr onClick={() => Open(index)}>

              <td style={{ fontWeight: "bold" }}>
                {index + 1}
              </td>


              {!doubleArray && <td style={{ display: "flex", alignItems: "center" }}>

                <img style={{ width: "50px", height: "50px", borderRadius: "30%" }} src={data.image_location} />

              </td>}

              {element.map((el: any) =>


                <td>

                  {doubleArray ? data["data"][el] : data[el]}

                </td>

              )}

              <td>

                {!doubleArray && < Box sx={{ display: "flex", alignItems: "center", position: "relative" }}>

                  {bool[index] === true &&

                    <Box sx={{
                      backgroundColor: "white", display: "flex", flexDirection: "column", justifyContent: "center",
                      alignItems: "center",
                      boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
                      borderRadius: "5px", width: "120px",
                      position: "absolute", top: "0", right: "0", zIndex: "100",
                    }}>



                      <Box onClick={() => router.push(`${name}/details/${data._id}`)} sx={{
                        width: "100%", display: "flex", justifyContent: "start", alignItems: "center", p: 1,
                        '&:hover': {
                          backgroundColor: "#F2F3F4",
                          cursor: "pointer"
                        }

                      }}>

                        <RemoveRedEyeOutlinedIcon sx={{ color: "purple" }} />

                        <Typography variant='subtitle2' sx={{ ml: 1 }}>Over View</Typography>

                      </Box>


                      {isDoc &&

                        <Box onClick={() => router.push({ pathname: `${name}/doctors`, query: { clin: data._id } })} sx={{
                          width: "100%", display: "flex", justifyContent: "start", alignItems: "center", p: 1,
                          '&:hover': {
                            backgroundColor: "#F2F3F4",
                            cursor: "pointer"
                          }

                        }}>

                          <AccountCircleOutlinedIcon sx={{ color: "dodgerblue" }} />

                          <Typography variant='subtitle2' sx={{ ml: 1 }}>Doctors</Typography>

                        </Box>

                      }


                      <Box onClick={() => router.push(`${name}/edit/${data._id}`)} sx={{
                        width: "100%", display: "flex", justifyContent: "start", alignItems: "center", p: 1,
                        '&:hover': {
                          backgroundColor: "#F2F3F4",
                          cursor: "pointer"
                        }

                      }}>

                        <ModeEditOutlineOutlinedIcon sx={{ color: "green" }} />

                        <Typography variant='subtitle2' sx={{ ml: 1 }}>Edit</Typography>

                      </Box>


                      <Box onClick={() => handleSubmitDelete(data._id)} sx={{
                        width: "100%", display: "flex", justifyContent: "start", alignItems: "center", p: 1,
                        '&:hover': {
                          backgroundColor: "#F2F3F4",
                          cursor: "pointer"
                        }
                      }}>

                        <DeleteOutlineIcon sx={{ color: "red" }} />

                        <Typography variant='subtitle2' sx={{ ml: 1 }}>Delete</Typography>

                      </Box>

                    </Box>}

                  <IconButton>

                    <MoreVertIcon onClick={() => Open(index)} />

                  </IconButton>

                </Box>}

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