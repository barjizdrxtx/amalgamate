import { Box, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { useRouter } from 'next/router';
import axios from 'axios';
import ScienceIcon from '@mui/icons-material/Science';
import { LIGHT_COLOR, LIGHT_GREY_COLOR } from '../../../utls/colors';

export const Actions = (props: any) => {

    const { name, id, index, bool, Open, refetch, actions } = props;

    const router = useRouter()

    const handleDelete = () => {

        axios.delete(`${name}/${id}`)
            .then((response) => {
                console.log(response);
                Open(index);
                refetch();
            })
    }

    const handleEdit = () => {

        router.push(`${name}/edit/${id}`)

    }

    const handleDetails = () => {

        router.push(`${name}/details/${id}`)

    }
    const handleDoctors = () => {

        router.push({ pathname: `${name}/doctors`, query: { institution_id: id } })

    }

    const handleLabTest = () => {

        router.push({ pathname: `${name}/add-test`, query: { institution_id: id } })

    }

    const actionButtons = [

        {
            text: "OverView",
            icon: RemoveRedEyeOutlinedIcon,
            color: "purple",
            onClick: handleDetails
        },
        {
            text: "Doctors",
            icon: AccountCircleOutlinedIcon,
            color: "dodgerblue",
            onClick: handleDoctors
        },
        {
            text: "LabTest",
            icon: ScienceIcon,
            color: "orange",
            onClick: handleLabTest
        },
        {
            text: "Edit",
            icon: ModeEditOutlineOutlinedIcon,
            color: "green",
            onClick: handleEdit
        },
        {
            text: "Delete",
            icon: DeleteOutlineIcon,
            color: "red",
            onClick: handleDelete
        }
    ]

    let filteredActionButtons = actionButtons.filter(u => actions.includes(u.text));


    return (

        <Grid>

            <Box sx={{ display: "flex", alignItems: "center", position: "relative" }}>

                {bool[index] === true &&

                    <Box sx={{
                        backgroundColor: "white", display: "flex", flexDirection: "column", justifyContent: "center",
                        alignItems: "center",
                        boxShadow: "rgba(17, 17, 26, 0.1) 0px 0px 16px",
                        borderRadius: "5px", width: "120px",
                        position: "absolute", top: "0", right: "0", zIndex: "100",
                    }}>

                        {filteredActionButtons.map(data =>

                            <Box onClick={data.onClick}

                                sx={{
                                    width: "100%", display: "flex", justifyContent: "start", alignItems: "center", p: 1,
                                    '&:hover': {
                                        backgroundColor: LIGHT_GREY_COLOR,
                                        cursor: "pointer"
                                    }

                                }}>

                                <data.icon sx={{ color: data.color }} />

                                <Typography variant='subtitle2' sx={{ ml: 1 }}>{data.text}</Typography>

                            </Box>
                        )}

                    </Box>}

                <IconButton onClick={() => Open(index)}>

                    <MoreVertIcon />

                </IconButton>

            </Box >

            {bool[index] === true &&
                <Box onClick={() => Open(index)} sx={{
                    top: "0", left: "0", width: "100%",
                    height: "100vh", position: "absolute"
                }}>

                </Box>}

        </Grid>

    )
}
