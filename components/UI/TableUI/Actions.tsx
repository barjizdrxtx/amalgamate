import { Box, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useRouter } from 'next/router';
import axios from 'axios';
import { LIGHT_GREY_COLOR } from '../../../utls/colors';
import { useJwt } from '../../../hooks/useJwt';

export const Actions = (props: any) => {

    const { name, id, index, bool, Open, refetch, actions } = props;

    const router = useRouter();

    const token = useJwt();

    const handleDelete = () => {

        axios.delete(`${name}/${id}`,

            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + token
                }
            }

        )
            .then((response) => {
                Open(index);
                refetch();
            })
    }

    const handleEdit = () => {

        router.push(`${name}/edit/${id}`)

    }


    const actionButtons = [

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
