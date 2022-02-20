import React from "react";
import PropTypes from 'prop-types';
import LinearProgress from '@material-ui/core/LinearProgress';
import {useEffect} from "react";
import Box from "@mui/material/Box";

import { createStyles, makeStyles } from '@material-ui/core/styles';
import {Button} from "@material-ui/core";
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

const LinearProgressWithLabel = (props) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress color={'secondary'} variant="determinate" {...props} />
            </Box>
            <Box sx={{ minWidth: 35 }} fontWeight={'500'}>{`${Math.round(
                props.value,
            )}%`}</Box>
        </Box>
    );
}
LinearProgressWithLabel.propTypes = {
    value: PropTypes.number.isRequired,
};

const Home = () => {
    const classes = useStyles();

    const [start, setStart] =  React.useState(false);
    const [progress, setProgress] = React.useState(0);

    useEffect(() => {
        if(start === true){
            if(progress === 100){
                setStart(false)
                window.location.href = "/image";
            }
            const timer = setInterval(() => {
                setProgress((prevProgress) => (prevProgress >= 100 ? 100 : prevProgress + 1));
            }, 100);
            return () => {
                clearInterval(timer);
            };
        }

    }, [progress, start]);

    return (
        <>
            <Box width={'100vw'} height={'100vh'} className={classes.main} display={'flex'} justifyContent={'center'} alignItems={'center'}>
                <Box width={{ md: '500px', sm: '280px' }} p={{ md: 3, sm: 3, xs: 2}}
                     bgcolor={'white'}
                     display={'flex'}
                     borderRadius={'5px'}
                     justifyContent={'center'}
                     alignItems={'center'}
                     flexDirection={'column'}
                     sx={{boxShadow: '8.0px 16.0px 16.0px hsl(0deg 0% 0% / 0.25);'}}
                >
                    <Box fontWeight={'500'} fontSize={{ md: '20px', sm: '16px' }} textAlign={'center'} mb={4}>
                        Click on Start to see an Image
                    </Box>
                    <Box display={'flex'} justifyContent={'center'} sx={{ width: '100%' }} mb={3}>
                        <Box width={{ md: '500px', sm: '350px', xs: '250px' }}>
                            <LinearProgressWithLabel value={progress} />
                        </Box>
                    </Box>
                    <Box display={'flex'}
                         justifyContent={'center'}
                         alignItems={'center'}
                         mt={2}
                    >
                        <Button variant={'contained'} onClick={() => {
                            setStart(true)
                        }}>
                            Start
                        </Button>
                    </Box>
                </Box>
            </Box>
        </>
    );
};

export default Home;
