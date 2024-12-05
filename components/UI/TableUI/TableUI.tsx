import { Box, Grid, Pagination, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import style from "../../../styles/TableUI.module.css"
import { useQueryFetch } from '../../../hooks/useQueryFetch';
import { useRouter } from 'next/router';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { SearchBar } from '../SearchBar/SearchBar';
import { DropDown } from '../DropDown/DropDown';

export const TableUI = (props: any) => {


  const { tableHead, element, showStatus,
    showImage, nestedArray, tableName } = props;


  const [page, setPage]: any = useState(1);

  const [limit, setLimit] = useState(25);

  const router = useRouter();

  const serverDropData = [
    { name: 'all' },
    { name: "vpn" },
    { name: "onpremise" },
    { name: "cloud" },
    { name: "dyndns" }
  ]


  const statusDropData = [
    { name: 'all' },
    { name: "active" },
    { name: "inactive" },
  ]

  const [searchResult, setSearchResult]: any = useState('')
  const [serverType, setServerType]: any = useState('all')
  const [status, setStatus]: any = useState('all')

  // ?page=${page}&limit=${limit}
  // Function to construct query
  const buildQuery = () => {
    const params = new URLSearchParams();

    // Add required parameters
    params.append('query', searchResult);
    params.append('page', page.toString());
    params.append('limit', limit.toString());

    // Conditionally add optional parameters
    if (serverType !== 'all') {
      params.append('server_type', serverType);
    }
    if (status !== 'all') {
      if (status === 'active')
        params.append('is_active', 'true');
      else
        params.append('is_active', 'false');
    }

    return params.toString();
  };

  // Using the query in your custom hook or fetch
  const query = buildQuery();
  const { fetchedData: tableData } = useQueryFetch(`request/search?${query}`);


  const totalLength = tableData?.result?.rows?.length

  let totalPages = totalLength === limit ? JSON.parse(page) + 1 : JSON.parse(page);



  const handleChange = (e: any, p: any) => {

    setPage(p)

  }



  useEffect(() => {

    if (searchResult.length === 0) {

      localStorage.setItem("page", page)

    }

  }, [searchResult, serverType, status, page])


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

          <Grid item container justifyContent="space-between" alignItems="center">
            <Box sx={{ display: "flex", justifyContent: "start", alignItems: "center", width: '30%' }}>
              <SearchBar setSearchResult={setSearchResult} setPage={setPage} />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "start", alignItems: "center", width: '30%' }}>
              <DropDown text="Server type" value={serverType} setValue={setServerType} dropData={serverDropData} id="name" name="name" />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "start", alignItems: "center", width: '30%' }}>
              <DropDown text="Status" value={status} setValue={setStatus} dropData={statusDropData} id="name" name="name" />
            </Box>
          </Grid>


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

                <tr key={index} style={{ cursor: "pointer" }} onClick={() => router.push(`/request/details/${data.id}`)}>

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

                    <td key={index} >

                      {
                        el === 'total_systems' ?
                          // data['erp_system_count'] + data['tab_count'] + data['pos_system_count'] 
                          data.branch.reduce((sum: any, item: any) => {
                            return sum + item.erp_system_count + item.pos_system_count + item.tab_count;
                          }, 0)
                          : el === 'active_systems' ?
                            // data['active_erp'] + data['active_pos'] + data['active_tabs']
                            data.branch.reduce((sum: any, item: any) => {
                              return sum + item.active_erp + item.active_pos + item.active_tabs;
                            }, 0)
                            : nestedArray ? data["data"][el]
                              : data[el]}

                    </td>

                  )}

                  {showStatus &&

                    <td>

                      <Typography sx={{
                        width: 'fit-content', bgcolor: data.is_active === true ? "yellowgreen" : "gray", px: 1,
                        borderRadius: "20px", color: "white"
                      }}>{data.is_active === true ? "Active" : "Inactive"}</Typography>

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

        </Box >
      </Grid >

    </>

  )
}
