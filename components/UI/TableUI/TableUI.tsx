
import { Box, Grid, IconButton, OutlinedInput, Pagination, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import style from "../../../styles/TableUI.module.css"
import FileUploadIcon from '@mui/icons-material/FileUpload';
import FilterListIcon from '@mui/icons-material/FilterList';
import axios from 'axios';
import { useQueryFetch } from '../../../hooks/useQueryFetch';
import { RejectPopup } from '../Popups/RejectPopup/RejectPopup';
import { Actions } from './Actions';

import { useClickAnyWhere } from 'usehooks-ts'


export const TableUI = (props: any) => {


  const { tableHead, element, name, doubleArray, disableActions, disableImage, tableName } = props;

  const [count, setCount] = useState(0)

  useClickAnyWhere(() => {
    setCount(prev => prev + 1)
  })


  const [isPopUp, setIsPopup] = useState(false);

  const [page, setPage] = useState(1);

  const [limit, setLimit] = useState(10);


  const { fetchedData: tableData, refetch: refetch } = useQueryFetch(`${name}?page=${page}&limit=${limit}`);

  const [bool, setBool] = useState([]);

  const totalLength = tableData?.result?.length

  let totalPages = totalLength === limit ? page + 1 : page;

  console.log("totalPages", totalPages)


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
        backgroundColor: "white",
        boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
        borderRadius: "20px", p: 2
      }}>

        <Typography variant='h5' sx={{ mr: 4, fontWeight: "bold", color: "#566573" }}>{tableName}</Typography>
        <p>Click count: {count}</p>


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

            {!disableImage && <th>Image</th>}

            {tableHead.map((data: any) =>

              <th>{data}</th>

            )}

            {!disableActions && <th>Actions</th>}

          </tr>

          {tableData?.result?.map((data: any, index: any) =>

            <tr>

              <td style={{ fontWeight: "bold" }}>
                {index + 1 + (page - 1) * limit}
              </td>


              {!disableImage && <td style={{ display: "flex", alignItems: "center" }}>

                <img style={{ width: "50px", height: "50px", borderRadius: "30%" }} src={data.image_location} />

              </td>}

              {element.map((el: any) =>


                <td>

                  {doubleArray ? data["data"][el] : data[el]}

                </td>

              )}

              {!disableActions && <td>

                <Actions

                  bool={bool}
                  index={index}
                  Open={Open}
                  refetch={refetch}
                  id={data._id}
                  name={name}
                />

              </td>}

            </tr>

          )}

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