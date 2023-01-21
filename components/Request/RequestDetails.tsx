import React from 'react'
import { Box, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/router';
import { useQueryFetchId } from '../../hooks/useQueryFetch';
import Checkbox from '@mui/material/Checkbox';
import DownloadIcon from '@mui/icons-material/Download';
import { CustomizedButton } from '../UI/Button/CustomizedButton';
import axios from 'axios';
import { useJwt } from '../../hooks/useJwt';

export const RequestDetails = () => {

    const router = useRouter();

    const { id } = router.query;

    const { fetchedData: fetchedData } = useQueryFetchId(`request`, id);

    const request = fetchedData?.result

    const token = useJwt();

    const handleDelete = () => {

        axios.delete(`request/${id}`,

            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token
                }
            }

        )
            .then((response) => {

                router.push("/")

            })
    }

    const download = (e: any) => {
        console.log(e.target.href);
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
                console.log(err);
            });
    };



    return (

        <Grid container justifyContent="center">

            <Grid container lg={12} sx={{
                height: "85vh", overflowY: "scroll",
                bgcolor: "white", borderRadius: "20px",
                boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px"
            }}>

                <Grid container lg={11} justifyContent="end">

                    <CustomizedButton mx={1} onClick={() => router.push(`/request/edit/${id}`)} bgcolor="#32CD32">Edit</CustomizedButton>

                    <CustomizedButton mx={1} onClick={handleDelete} bgcolor="red">Delete</CustomizedButton>

                </Grid>


                <Grid container md={6} lg={6} alignItems="center">

                    <Typography sx={{ mx: 1 }}>{request?.file_location}</Typography>


                    {request?.file_location != null &&

                        < Box sx={{
                            bgcolor: "dodgerblue", display: "flex",
                            justifyContent: "center", alignItems: "center", p: 0.5, borderRadius: "10px"
                        }}>


                            <DownloadIcon sx={{ color: "white" }} />

                            <a style={{ color: "white" }}
                                href={request?.file_location}
                                download
                                onClick={e => download(e)}
                            >
                                Download File
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

                    <Typography sx={{ flex: 1, fontWeight: "bold" }}>Next Amc Date</Typography>

                    <Typography sx={{ flex: 1 }}>{request?.next_amc_date}</Typography>

                </Grid>

                {checkbox.map((data: any) =>

                    <Grid container md={6} lg={6} sx={{
                        width: "100%", px: 1,
                        borderBottom: "1px solid #E5E7E9",
                        display: "flex", justifyContent: "space-around", alignItems: "center"
                    }}>

                        <Box sx={{ flex: 1 }}>

                            <Typography sx={{ fontWeight: "bold" }}>{data.title}</Typography>

                        </Box>

                        <Box sx={{ flex: 1 }}>

                            <Checkbox checked={request?.[data.data]} />

                        </Box>


                    </Grid>

                )}

            </Grid >

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
        title: "Cr No",
        data: "cr_no",
    },
    {
        title: "Email",
        data: "email",
    },
    {
        title: "Wwner Contact No",
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
        title: "Erp System Count",
        data: "erp_system_count",
    },
    {
        title: "Pos System Count",
        data: "pos_system_count",
    },
    {
        title: "User Limit",
        data: "user_limit",
    },
    {
        title: "Active Erp",
        data: "active_erp",
    },
    {
        title: "Active Pos",
        data: "active_pos",
    },


    {
        title: "Amc",
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
        title: "Sql Password",
        data: "sql_password",
    },

]

const checkbox = [

    {
        title: "Erp",
        data: "erp",
    },
    {
        title: "Pos",
        data: "pos",
    },
    {
        title: "Erp Pos",
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