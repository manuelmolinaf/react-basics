import { Box, Divider, ListItem, ListItemButton, ListItemIcon, ListItemText, Popover, Stack, Typography, type PopoverProps } from '@mui/material';

import { type FC } from 'react';


import LogoutIcon from '@mui/icons-material/Logout';

import { useKeycloak } from '@react-keycloak/web';



const UserPopover: FC<PopoverProps> = ({ open, anchorEl, onClose, anchorOrigin, transformOrigin }) => {


  const { keycloak } = useKeycloak();



  const handleSignOut = () => {
    keycloak.logout();

  }


  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={onClose}
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
    >
      <Box sx={{ width: 275, padding: 2 }} >
        <Stack spacing={2}>
          

          <Box justifyItems='center'>
            <Typography sx={{ fontWeight: 'bold' }}>
              {keycloak?.tokenParsed?.name || keycloak?.tokenParsed?.preferred_username}
            </Typography>
            <Typography variant='subtitle1' color='text.secondary'>
              {keycloak?.tokenParsed?.email}
            </Typography>
          </Box>
          <Divider />
          <Box>


            <ListItem disableGutters disablePadding>
              <ListItemButton sx={{ borderRadius: 1}}onClick={handleSignOut}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText slotProps={{
                  primary: { variant: 'button', textTransform:'none' },
                }} primary={'Sign Out'} />
              </ListItemButton>
            </ListItem>
            

          </Box>
        </Stack>
      </Box>
    </Popover>
  )
}

export default UserPopover;