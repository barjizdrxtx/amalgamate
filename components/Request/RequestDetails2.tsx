import React, { useEffect, useState } from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/router';
import { useQueryFetchId } from '../../hooks/useQueryFetch';
import Checkbox from '@mui/material/Checkbox';
import DownloadIcon from '@mui/icons-material/Download';
import { CustomizedButton } from '../UI/Button/CustomizedButton';
import axios from 'axios';
import { useJwt } from '../../hooks/useJwt';
import * as moment from 'moment'
import { LoadingPage } from '../UI/LoadingPage/LoadingPage';
import { AlertBox } from '../UI/AlertBox/AlertBox';

export const RequestDetails2 = (props: any) => {

    const { id, setSearchResult } = props;

    const { fetchedData: fetchedData, refetch: refetch } = useQueryFetchId(`request/details`, id);

    const request = fetchedData?.result

    const download = (e: any) => {
        // console.log(e.target.href);
        fetch(e.target.href, {
            method: "GET",
            headers: {}
        })
            .then(response => {
                response.arrayBuffer().then(function (buffer) {
                    const url = window.URL.createObjectURL(new Blob([buffer]));
                    const link = document.createElement("a");
                    link.href = url;
                    link.setAttribute("download", "image.png"); //or any other extension
                    document.body.appendChild(link);
                    link.click();
                });
            })
            .catch(err => {
                // console.log(err);
            });
    };


    console.log("request", request)


    useEffect(() => {

        if (id === '') {

            setSearchResult(null)

        }


    }, [id])



    return (

        <Grid container justifyContent="center" sx={{ mt: { xs: 8, md: 3 } }}>

            {request != null ?

                <Grid container lg={12} sx={{
                    bgcolor: "white", borderRadius: "20px",
                }}>

                    <Grid container md={6} lg={6} sx={{
                        width: "100%", p: 1,
                        borderBottom: "1px solid #E5E7E9",
                        display: "flex", justifyContent: "space-around", alignItems: "center"
                    }}>

                        <Typography sx={{ flex: 1, fontWeight: "bold" }}>Download File</Typography>


                        {request?.file_location != null &&

                            < Box sx={{
                                width: "30%",
                                bgcolor: "dodgerblue", display: "flex",
                                justifyContent: "center", alignItems: "center", p: 0.5, borderRadius: "10px"
                            }}>

                                <a style={{ color: "white" }}
                                    href={request?.file_location}
                                    onClick={e => download(e)}
                                    target="_blank"
                                >
                                    <DownloadIcon sx={{ color: "white" }} />
                                </a>

                            </Box>

                        }


                    </Grid>


                    {details.map(data =>


                        <Grid container md={6} lg={6} sx={{
                            width: "100%", p: 1,
                            borderBottom: "1px solid #E5E7E9",
                            display: "flex", justifyContent: "space-around", alignItems: "center"
                        }}>

                            <Typography sx={{ flex: 1, fontWeight: "bold" }}>{data.title}</Typography>

                            <Typography sx={{ flex: 1 }}>{request?.[data.data]}</Typography>

                        </Grid>


                    )}

                    <Grid container md={6} lg={6} sx={{
                        width: "100%", p: 1,
                        borderBottom: "1px solid #E5E7E9",
                        display: "flex", justifyContent: "space-around", alignItems: "center"
                    }}>

                        <Typography sx={{ flex: 1, fontWeight: "bold" }}>Next AMC Date</Typography>

                        <Typography sx={{ flex: 1 }}>{moment.utc(request?.next_amc_date).format('MMMM Do YYYY')}</Typography>

                    </Grid>

                    {checkbox.map((data: any, index: any) =>

                        <Grid key={index} container md={6} lg={6} sx={{
                            width: "100%", px: 1,
                            borderBottom: "1px solid #E5E7E9",
                            display: "flex", justifyContent: "space-around", alignItems: "center"
                        }}>

                            <Box sx={{ flex: 1 }}>

                                <Typography sx={{ fontWeight: "bold" }}>{data.title}</Typography>

                            </Box>

                            <Box sx={{ flex: 1 }}>

                                <Checkbox disabled checked={request?.[data.data]} />

                            </Box>


                        </Grid>

                    )}

                </Grid >

                :

                <Grid>


                    <img width="400px" src="assets/nodata.png" />

                </Grid >


            }

        </Grid >

    )
}



const details = [


    {
        title: "Client Id",
        data: "client_id",
    },
    {
        title: "Customer Name",
        data: "customer_name",
    },
    {
        title: "Shop Name",
        data: "shop_name",
    },
    {
        title: "Shop Address",
        data: "shop_address",
    },
    {
        title: "Contact Number",
        data: "contact_number",
    },
    {
        title: "Contact Person",
        data: "contact_person",
    },
    {
        title: "CR No",
        data: "cr_no",
    },
    {
        title: "Email",
        data: "email",
    },
    {
        title: "Owner Contact No",
        data: "owner_contact_no",
    },
    {
        title: "Software Name",
        data: "software_name",
    },
    {
        title: "Shop Category",
        data: "shop_category",
    },

    {
        title: "ERP System Count",
        data: "erp_system_count",
    },
    {
        title: "POS System Count",
        data: "pos_system_count",
    },
    {
        title: "User Limit",
        data: "user_limit",
    },
    {
        title: "Active ERP",
        data: "active_erp",
    },
    {
        title: "Active POS",
        data: "active_pos",
    },


    {
        title: "AMC",
        data: "amc",
    },


    {
        title: "Server Password",
        data: "server_password",
    },
    {
        title: "Anydesk Password",
        data: "anydesk_password",
    },
    {
        title: "Server Configuration",
        data: "server_configuration",
    },
    {
        title: "SQL Password",
        data: "sql_password",
    },

]

const checkbox = [

    {
        title: "ERP",
        data: "erp",
    },
    {
        title: "POS",
        data: "pos",
    },
    {
        title: "ERP/POS",
        data: "erp_pos",
    },

    {
        title: "Software Support",
        data: "software_support",
    },
    {
        title: "Hardware Support",
        data: "hardware_support",
    },
    {
        title: "Network Support",
        data: "network_support",
    },

]