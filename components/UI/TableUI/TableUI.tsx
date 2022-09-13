import { Box, Grid, IconButton, OutlinedInput, Pagination, Stack, Typography } from '@mui/material'
import React from 'react'
import style from "../../../styles/TableUI.module.css"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import FilterListIcon from '@mui/icons-material/FilterList';
import axios from 'axios';
import { useQueryFetch } from '../../../utils/useQueryFetch';
import { CSVLink, CSVDownload } from "react-csv";


export const TableUI = (props: any) => {


  const { tableHead, element, name } = props;

  const { fetchedData: tableData, refetch: refetch } = useQueryFetch(name);


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

            {/* <CSVLink data={tableData}><FileUploadIcon /></CSVLink> */}

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

            <tr>

              <td style={{ display: "flex", alignItems: "center" }}>

                <img style={{ width: "50px", height: "50px", borderRadius: "30%" }} src={data.image_location} />

              </td>

              {element.map((el: any) =>

                <td>{data[el]}</td>

              )}

              <td>

                <Box sx={{ display: "flex", alignItems: "center" }}>

                  <IconButton>
                    <DeleteOutlineIcon sx={{ color: "red" }} onClick={() => handleSubmitDelete(data._id)} />
                  </IconButton>

                  <IconButton>
                    <ModeEditOutlineOutlinedIcon sx={{ color: "green" }} />
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
