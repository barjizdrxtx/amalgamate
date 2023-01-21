import { Box, Grid, Pagination, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import style from "../../../styles/TableUI.module.css"
import { useQueryFetch } from '../../../hooks/useQueryFetch';
import { RejectPopup } from '../Popups/RejectPopup/RejectPopup';
import { useRouter } from 'next/router';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { SearchBar } from '../SearchBar/SearchBar';

export const TableUI = (props: any) => {


  const { tableHead, element, name, nestedArray, disableActions, disableImage, tableName, actions } = props;


  const [isPopUp, setIsPopup] = useState(false);

  const [page, setPage] = useState(1);

  const [limit, setLimit] = useState(15);

  const router = useRouter();

  const [request, setRequest]: any = useState();


  const [searchResult, setSearchResult]: any = useState()


  const { fetchedData: tableData, refetch: refetch } = useQueryFetch(`${name}?page=${page}&limit=${limit}`);


  const { fetchedData: search } = useQueryFetch(`request/search?query=${searchResult}`);


  const [bool, setBool] = useState([]);

  const totalLength = tableData?.result?.length

  let totalPages = totalLength === limit ? page + 1 : page;


  const Open = (index: any) => {

    let newArray: any = [...bool]

    newArray[index] = !newArray[index];

    setBool(newArray)

  }


  React.useEffect(() => {


    if (search?.result.length > 0) {

      setRequest(search)

    }

    else {


      setRequest(tableData)

    }

  })




  const handleChange = (e: any, p: any) => {

    setPage(p)

  }



  return (

    <Grid container>

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

          <SearchBar setSearchResult={setSearchResult} />

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

            </tr>

            {request?.result?.map((data: any, index: any) =>

              <tr style={{ cursor: "pointer" }}>

                <td onClick={() => router.push(`/request/details/${data._id}`)} style={{ fontWeight: "bold" }}>
                  {index + 1 + (page - 1) * limit}
                </td>


                {!disableImage && <td onClick={() => router.push(`request/details/${data._id}`)} style={{ display: "flex", alignItems: "center" }}>

                  {data.images[0].image === undefined ?
                    <AccountCircleIcon sx={{ fontSize: "3.8rem", color: "#AEAEAE" }} /> :

                    <img src={data.images[0].image} width="55px" height="55px"
                      style={{ borderRadius: "100%" }} />

                  }


                </td>}

                {element.map((el: any) =>


                  <td onClick={() => router.push(`/request/details/${data.id}`)}>

                    {nestedArray ? data["data"][el] : data[el]}

                  </td>

                )}


              </tr>

            )}


          </tbody>

        </table>

        <Box sx={{ display: "flex", justifyContent: "end", py: 2 }}>

          <Stack spacing={2}>
            <Pagination onChange={handleChange} count={totalPages} color="primary" />
          </Stack>

        </Box>

      </Box>

    </Grid >
  )
}