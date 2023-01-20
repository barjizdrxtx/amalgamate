import { Button } from '@mui/material';
import React from 'react'

export const CustomizedButton = (props: any) => {

    const { children, onClick, bgcolor, type, m } = props;

    return (
        <Button type={type} sx={{
            width: props.width,
            boxShadow: "none", my: 1, backgroundColor: bgcolor, border: `1px solid ${bgcolor}`, "&:hover": {
                backgroundColor: "transparent", boxShadow: "none",
                color: bgcolor, border: `1px solid ${bgcolor}`,

            },
        }}
            variant="contained"
            onClick={onClick}
        >
            {children}
        </Button >
    )
}
