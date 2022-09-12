import { Box, Grid } from '@mui/material'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { useQueryFetch } from '../../../../utils/useQueryFetch';
import { TableUI } from '../../../UI/TableUI/TableUI'
import axios from 'axios';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import { IconButton } from '@mui/material';
import { CustomizedButton } from '../../../UI/Button/CustomizedButton';

export const Doctors = () => {


    const tableHead = [
        {
            name: "Name", options: { filterOptions: { fullWidth: true } }
        },
        "Photo",
        "Email",
        "Mobile",
        "Gender",
        "Actions"
    ];


    const [data, setMyData]: any = useState([]);

    const router = useRouter();

    const clinic_id: any = router.query.clin


    const { fetchedData: mydata } = useQueryFetch(`clinics/doctors-list/${clinic_id}`);

    const fetchedData = mydata?.result;

    console.log("clinic_id", clinic_id)


    const handleSubmitDelete = (data: any) => {

        axios.delete(`doctors/${data}`)
            .then((response) => {
                console.log(response);
                window.location.reload();
            })
    }


    useEffect(() => {

        if (data?.length < fetchedData?.length)

            setMyData([...data, {


                Name: fetchedData[data.length]?.name,
                Photo: <img width="100px" src={fetchedData[data.length]?.dp} />,
                Email: fetchedData[data.length]?.email,
                Mobile: fetchedData[data.length]?.mobile,
                Gender: fetchedData[data.length]?.gender,
                Actions:
                    <>

                        <IconButton>
                            <EditIcon sx={{ color: "green" }}

                                onClick={() => router.push({
                                    pathname: '/clinics/doctors/edit/',
                                    query: { clin: clinic_id, doc: fetchedData[data.length]?._id }
                                })} />

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

                <CustomizedButton

                    // onClick={() => router.push(`/clinics/doctors/create/${id}`)}

                    onClick={() => router.push({ pathname: '/clinics/doctors/create/', query: { clin: clinic_id } })}
                    bgColor="dodgerblue">Create Doctors</CustomizedButton>

            </Box>

            <TableUI title="Doctors" tableHead={tableHead} data={data} />

        </Grid >
    )
}
