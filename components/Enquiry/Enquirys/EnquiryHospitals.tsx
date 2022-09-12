import React, { useState, useEffect } from 'react'
import { Grid, Box, Alert } from '@mui/material'
import axios from 'axios';
import { useRouter } from 'next/router';
import { useQueryFetch } from '../../../utils/useQueryFetch';
import { CustomizedButton } from '../../UI/Button/CustomizedButton';
import { TableUI } from '../../UI/TableUI/TableUI';

export const EnquiryHospitals = () => {

    const router = useRouter();

    const [isDelete, setIsDelete] = useState(false);

    const { fetchedData: fetchedData, refetch: refetch } = useQueryFetch('enquiry/list-by-type/doctors');

    console.log("fetchedData", fetchedData)

    const tableHead = [

        "Image",
        "Name",
        "Website",
        "Discription",
        "Clinic Email",
        "Clinic Contact",
        "Actions"

    ];

    useEffect(() => {
        const timer = setTimeout(() => setIsDelete(false), 3000);
        return () => clearTimeout(timer);
    }, []);


    const handleSubmitDelete = (data: any) => {

        axios.delete(`diseases/${data}`)
            .then((response) => {
                console.log(response);
                setIsDelete(true)
                refetch();
            })
    }


    const element = [

        "name",
        "website",
        "description",
        "clinic_email",
        "clinic_contact_no"

    ]


    return (

        <Grid>

            {isDelete && <Box>

                <Alert variant="outlined" severity="error">
                    Deleted
                </Alert>

            </Box>}

        
            <TableUI
                tableHead={tableHead}
                tableData={fetchedData?.result}
                handleSubmitDelete={handleSubmitDelete}
                element={element}
            />

        </Grid>
    )
}
