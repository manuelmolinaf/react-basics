
import { Avatar } from '@mui/material';
import { useKeycloak } from '@react-keycloak/web';
import type { FC } from 'react';

const MoviesAvatar:FC<{size:number}> = ({size}) =>{
  const { keycloak } = useKeycloak();
  return (
  <Avatar sx={{
    width:size,
    height:size,
    bgcolor: (theme) => theme.palette.mode === 'light' ?'#DEF1FF': theme.palette.primary.main,
    color: (theme) => theme.palette.mode === 'light' ? theme.palette.primary.main: theme.palette.primary.contrastText
  }}>
    {keycloak?.tokenParsed?.given_name[0] + keycloak?.tokenParsed?.family_name[0]}
  </Avatar>
)}

export default MoviesAvatar;