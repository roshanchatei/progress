import React from "react";
import Box from "@mui/material/Box";
import Button from "@material-ui/core/Button";

import { createStyles, makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(() =>
    createStyles({
        main: {
            background: 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)',
            // [theme.breakpoints.down('sm')]: {
            //     fontSize: '18px',
            // },
        },
    }),
);

const Image = () => {

    const classes = useStyles();
    return (
        <>
            <Box width={'100vw'} height={'100vh'} className={classes.main} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Box width={{ md: '500px', sm: '280px' }} p={{ md: 6, sm: 4, xs: 2}}
                     bgcolor={'white'}
                     display={'flex'}
                     borderRadius={'5px'}
                     justifyContent={'center'}
                     alignItems={'center'}
                     flexDirection={'column'}
                     sx={{boxShadow: '8.0px 16.0px 16.0px hsl(0deg 0% 0% / 0.25);'}}
                >
                    <Box width={{ md: '300px', sm: '300px', xs: '200px' }} borderRadius={'5px'} overflow={'hidden'} mb={5} mt={1}>
                        <img style={{ width: '100%', height: 'auto', }} src={'https://i.makeagif.com/media/9-09-2015/LvlGlb.gif'} alt={"Bg"} />
                    </Box>
                    <Button variant={'contained'} color={'secondary'} onClick={() => {
                        window.location.href = "/";
                    }}>
                        Reset
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default Image;
