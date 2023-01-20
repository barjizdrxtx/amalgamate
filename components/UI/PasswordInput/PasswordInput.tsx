import * as React from 'react';
import { Box, Typography, Grid, TextField } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export const PasswordInput = (props: any) => {

    const { formik } = props;

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    return (

        <Box>

            <Box sx={{ mb: 0.5 }}>

                <Typography sx={{ color: "#566573", fontWeight: "bold" }}>Password</Typography>

            </Box>

            <OutlinedInput sx={{ width: "100%" }}
                id='password'
                name='password'
                type={showPassword ? 'text' : 'password'}
                onChange={formik.handleChange}
                error={formik.touched.password && Boolean(formik.errors.password)}
                // helperText={formik.touched.password && formik.errors.password}
                endAdornment={
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                        >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                    </InputAdornment>
                }
            />


        </Box >


    );
}