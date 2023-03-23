import { Grid } from '@mui/material'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { CustomizedButton } from '../../components/UI/Button/CustomizedButton';
import { DropDown } from '../../components/UI/DropDown/DropDown';
import { TableUI } from '../../components/UI/TableUI/TableUI';
import { useQueryFetch } from '../../hooks/useQueryFetch';
import { PRIMARY_COLOR } from '../../utls/colors';
import * as moment from 'moment'
import { Csv } from '../../components/UI/Csv/Csv';


const index = () => {

    const [type, setType]: any = React.useState(0);

    const [type_id, setTypeId] = React.useState(0);


    const [user_list, setUserList] = React.useState(0);

    const { fetchedData: fetchedData } = useQueryFetch(`search-history?type=${type}&type_id=${type_id}`);

    const { fetchedData: userData } = useQueryFetch(`user/list`);


    const userlist = userData?.result


    const history = fetchedData?.result

    console.log("user_list", user_list)


    const dropData = [

        {
            name: "client",
        },
        {
            name: "user",
        },
        {
            name: "date",
        },

    ]




    return (

        <Grid container justifyContent="start" sx={{ mt: { xs: 10, md: 0 } }}>


            <Grid container alignContent="space-around" alignItems="center">



                <Grid lg={4}>

                    <DropDown text="Select Type" value={type} setValue={setType} dropData={dropData} name="name" id="name" />

                </Grid >

                {type === "user" && < Grid lg={4}>

                    <DropDown text="User List" value={type_id} setValue={setTypeId} dropData={userlist} name="username" id="id" />

                </Grid >}

                {type === "client" &&

                    <Grid lg={4} sx={{ bgcolor: "" }}>

                        <Grid container sx={{ m: 1, bgcolor: "white" }}>

                            <Typography sx={{ color: "#566573", fontWeight: "bold", width: "100%", mb: 1 }}>Type</Typography>

                            <TextField onChange={(e: any) => setTypeId(e.target.value)} />

                        </Grid>

                    </Grid >

                }

                {type === "date" && < Grid lg={4}>

                    <Grid lg={4} sx={{ bgcolor: "" }}>

                        <Grid container sx={{ m: 1, bgcolor: "white" }}>

                            <Typography sx={{ color: "#566573", fontWeight: "bold", width: "100%", mb: 1 }}>Date</Typography>

                            <TextField type="date" onChange={(e: any) => setTypeId(e.target.value)} />

                        </Grid>

                    </Grid >

                </Grid >}


                {history?.length > 0 &&

                    <Grid lg={4} sx={{ bgcolor: "", m: 1 }} alignItems="center">

                        <Csv csvdata={history} />

                    </Grid>

                }

            </Grid>







            {
                history?.map((data: any) =>

                    <Grid container lg={4}>


                        <Grid container sx={{ m: 1, p: 1, borderRadius: "10px", boxShadow: "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px" }}>

                            <Grid container lg={12}>

                                <Typography fontWeight="bold">Client Name</Typography>

                                <Typography sx={{ mx: 1 }}>{data?.client?.customer_name}</Typography>

                            </Grid>

                            <Grid container lg={12}>

                                <Typography fontWeight="bold">User Name</Typography>

                                <Typography sx={{ mx: 1 }}>{data.user.username}</Typography>

                            </Grid>


                            <Grid container lg={12}>

                                <Typography fontWeight="bold">Purpose </Typography>

                                <Typography sx={{ mx: 1 }}>{data.purpose}</Typography>

                            </Grid>

                            <Grid container lg={12}>

                                <Typography fontWeight="bold">Date </Typography>

                                <Typography sx={{ mx: 1 }}>{moment.utc(data.createdAt).format('MMMM Do YYYY, hh:mm A')}</Typography>

                            </Grid>

                        </Grid>


                    </Grid >

                )
            }


        </Grid >


    )
}

export default index


