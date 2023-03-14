import { Box, Grid, Pagination, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import style from "../../../styles/TableUI.module.css"
import { useQueryFetch } from '../../../hooks/useQueryFetch';
import { useRouter } from 'next/router';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { SearchBar } from '../SearchBar/SearchBar';

export const TableUI = (props: any) => {


  const { tableHead, element, showStatus,
    showImage, nestedArray, tableName } = props;


  const [page, setPage]: any = useState(1);

  const [limit, setLimit] = useState(10);

  const router = useRouter();

  const [searchResult, setSearchResult]: any = useState('')

  // ?page=${page}&limit=${limit}

  const { fetchedData: tableData } = useQueryFetch(`request/search?query=${searchResult}&page=${page}&limit=${limit}`);


  const totalLength = tableData?.result?.rows?.length

  let totalPages = totalLength === limit ? JSON.parse(page) + 1 : JSON.parse(page);

  console.log("tableData", tableData)



  const handleChange = (e: any, p: any) => {

    setPage(p)

  }



  useEffect(() => {

    if (searchResult.length === 0) {

      localStorage.setItem("page", page)

    }

  }, [page])


  useEffect(() => {

    if (searchResult.length > 0) {

      setPage(1)

    } else {

      setPage(localStorage.getItem("page"))

    }

  }, [searchResult.length])



  return (

    <>

      <Grid item container>

        <Box sx={{
          width: "100%", height: "80vh", overflowY: "scroll",
          bgcolor: "white",
          boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
          borderRadius: "20px", p: 2
        }}>

          <Typography variant='h5' sx={{
            mr: 4, fontWeight: "bold",
            color: "#566573", textTransform: "capitalize"
          }}>{tableName}</Typography>

          <Box sx={{ py: 3, display: "flex", justifyContent: "start", alignItems: "center" }}>

            <SearchBar setSearchResult={setSearchResult} setPage={setPage} />

          </Box>


          <table id={style.table}>

            <tbody>

              <tr>

                <th>No</th>


                {showImage && <th>Image</th>}


                {tableHead.map((data: any, index: any) =>

                  <th key={index}>{data}</th>

                )}



                {showStatus && <th>Status</th>}

              </tr>

              {tableData?.result?.rows?.map((data: any, index: any) =>

                <tr key={index} style={{ cursor: "pointer" }}>

                  <td style={{ fontWeight: "bold" }}>
                    {/* {index + 1 + (page - 1) * limit} */}
                    {data.id}
                  </td>


                  {showImage && <td style={{ display: "flex", alignItems: "center" }}>

                    {data.images[0].image === undefined ?
                      <AccountCircleIcon sx={{ fontSize: "3.8rem", color: "#AEAEAE" }} /> :

                      <img src={data.images[0].image} width="55px" height="55px"
                        style={{ borderRadius: "100%" }} />

                    }


                  </td>}

                  {element.map((el: any, index: any) =>


                    <td key={index} onClick={() => router.push(`/request/details/${data.id}`)}>

                      {nestedArray ? data["data"][el] : data[el]}

                    </td>

                  )}

                  {showStatus &&

                    <td>

                      <Typography sx={{
                        width: 'fit-content', bgcolor: data.is_active === true ? "green" : "grey", px: 1,
                        borderRadius: "20px", color: "white"
                      }}>{data.is_active === true ? "active" : "inactive"}</Typography>

                    </td>}




                </tr>

              )}


            </tbody>

          </table>

          <Box sx={{ display: "flex", justifyContent: "end", py: 2 }}>

            <Stack spacing={2}>
              <Pagination onChange={handleChange} count={totalPages} color="secondary" />
            </Stack>

          </Box>

        </Box>
      </Grid >

    </>

  )
}
