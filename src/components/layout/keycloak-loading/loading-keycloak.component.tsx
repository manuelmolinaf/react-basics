import { Box, CircularProgress } from '@mui/material';
import type { FC } from 'react';


const LoadingKeycloak: FC = () =>{


  return(
   <Box
    sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        p: 3,
        textAlign: 'center',
    }}
   >
    <CircularProgress />
   </Box>
  )
}

export default LoadingKeycloak;