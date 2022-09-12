import { Grid, Box } from '@mui/material'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { IconButton } from '@mui/material';
import { useQueryFetch } from '../../../utils/useQueryFetch';
import { CustomizedButton } from '../../UI/Button/CustomizedButton';
import { TableUI } from '../../UI/TableUI/TableUI';


export const Catagory = () => {


    const tableHead = [
        {
            name: "Name", options: { filterOptions: { fullWidth: true } }
        },
        "Image",
        "description",
        'Actions'
    ];


    const [data, setMyData]: any = useState([]);

    const router = useRouter();

    const { fetchedData: fetchedData } = useQueryFetch('diseases-categories');



    const handleSubmitDelete = (data: any) => {

        axios.delete(`diseases-categories/${data}`)
            .then((response) => {
                console.log(response);
                router.push("/diseases")
                window.location.reload();
            })


    }



    useEffect(() => {

        if (data?.length < fetchedData?.length)

            setMyData([...data, {

                Name: fetchedData?.[data.length]?.name,
                Image: <img width="100px" src={fetchedData[data.length]?.icon} />,
                description: fetchedData?.[data.length]?.description,
                Actions:

                    <>

                        <IconButton>
                            <EditIcon sx={{ color: "green" }} onClick={() => router.push(`/diseases/edit/${fetchedData[data.length]?._id}`)} />
                        </IconButton>

                        <IconButton>
                            <DeleteIcon sx={{ color: "red" }} onClick={() => handleSubmitDelete(fetchedData[data.length]?._id)} />
                        </IconButton>

                    </>
            }])
    })


    return (

        <Grid>

            <Box sx={{ m: 2 }}>

                <CustomizedButton onClick={() => router.push("/diseases/category-create")} bgColor="dodgerblue">Create Diseases Category</CustomizedButton>

            </Box>

            <TableUI title="Diseases" tableHead={tableHead} data={data} />

        </Grid>
    )
}
