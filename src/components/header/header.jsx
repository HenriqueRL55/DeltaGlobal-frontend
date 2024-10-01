import React from 'react';
import { AppBar, Toolbar, Box} from '@mui/material';

const Header = () => {
  return (
    <AppBar position="absolute">
      <Toolbar>
        <Box>
          <img style={{ margin:'12px'}} src="/src/assets/images/DeltaHome.png" alt="Delta Logo" width="150" />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
