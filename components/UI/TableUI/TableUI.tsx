import { Box, Grid, IconButton, OutlinedInput, Pagination, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import style from "../../../styles/TableUI.module.css"
import FileUploadIcon from '@mui/icons-material/FileUpload';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useQueryFetch } from '../../../hooks/useQueryFetch';
import { RejectPopup } from '../Popups/RejectPopup/RejectPopup';
import { Actions } from './Actions';
import { useRouter } from 'next/router';
import { useDarkmode } from '../../../hooks/useDarkmode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import * as moment from 'moment'

export const TableUI = (props: any) => {


  const { tableHead, element, name, nestedArray, disableActions, disableImage, tableName, actions } = props;


  const [isPopUp, setIsPopup] = useState(false);

  const [page, setPage] = useState(1);

  const [limit, setLimit] = useState(10);

  const router = useRouter();


  const { fetchedData: tableData, refetch: refetch } = useQueryFetch(`${name}?page=${page}&limit=${limit}`);

  const [bool, setBool] = useState([]);

  const totalLength = tableData?.result?.length

  let totalPages = totalLength === limit ? page + 1 : page;

  const darkmode = useDarkmode();


  const Open = (index: any) => {

    let newArray: any = [...bool]

    newArray[index] = !newArray[index];

    setBool(newArray)

  }

  const handleChange = (e: any, p: any) => {

    setPage(p)

  }


  return (

    <Grid>

      <Box sx={{
        bgcolor: darkmode,
        boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
        borderRadius: "20px", p: 2
      }}>

        <Typography variant='h5' sx={{
          mr: 4, fontWeight: "bold",
          color: "#566573", textTransform: "capitalize"
        }}>{tableName}</Typography>

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

          <tbody>


            <tr>

              <th>No</th>

              {!disableImage && <th>Image</th>}

              {tableHead.map((data: any) =>

                <th>{data}</th>

              )}

              {!disableActions && <th>Actions</th>}

            </tr>

            {tableData?.result?.map((data: any, index: any) =>

              <tr style={{ cursor: "pointer" }}>

                <td onClick={() => router.push(`/doctors/details/${data._id}`)} style={{ fontWeight: "bold" }}>
                  {index + 1 + (page - 1) * limit}
                </td>


                {!disableImage && <td onClick={() => router.push(`/doctors/details/${data._id}`)} style={{ display: "flex", alignItems: "center" }}>


                  {data.images[0].image === undefined ?
                    <AccountCircleIcon sx={{ fontSize: "3.8rem", color: "#AEAEAE" }} /> :

                    <img src={data.images[0].image} width="55px" height="55px"
                      style={{ borderRadius: "100%" }} />
                  }


                </td>}

                {element.map((el: any) =>


                  <td onClick={() => router.push(`/doctors/details/${data._id}`)}>

                    {nestedArray ? data["data"][el] : data[el]}

                  </td>

                )}


                <td>

                  {moment.utc(data.createdAt).format("MMM Do YY")}

                </td>




                {!disableActions && <td>

                  <Actions

                    bool={bool}
                    index={index}
                    Open={Open}
                    refetch={refetch}
                    id={data._id}
                    name={name}
                    actions={actions}
                  />

                </td>}

              </tr>

            )}


          </tbody>

        </table>

        <Box sx={{ display: "flex", justifyContent: "end", py: 2 }}>
          {/* 
          <TextField onChange={(e: any) => setLimit(e.target.value)} /> */}

          <Stack spacing={2}>
            <Pagination onChange={handleChange} count={totalPages} color="primary" />
          </Stack>

        </Box>

      </Box>

    </Grid >
  )
}