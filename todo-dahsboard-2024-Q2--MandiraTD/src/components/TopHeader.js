import React from 'react';
import '../styles/SideMenuBar.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { Box } from '@mui/material';


// Import local images
import bellIcon from '../imgs/Bell-off.svg';
import profileImage from '../imgs/profile.png';

const AppBarComponent = () => {
  return (
    <AppBar 
      position="static" 
      sx={{ 
          
        width: `100%`,
        height : '80px' , 
        backgroundColor: 'white',
        color:'black',
        fontSize: '20px',
        fontWeight : 600 ,
        marginLeft : '10px'
      }}
    >
      <Toolbar>
      
        <Typography variant="h5" sx={{ flexGrow: 1, fontSize : 20 }}>
          Dashboard
        </Typography>

        <Box display="flex" alignItems="center">
        
          <IconButton color="inherit">
            
              <img src={bellIcon} alt="Bell Icon" style={{ width: 24, height: 24 }} />
           
          </IconButton>

          {/* Profile image */}
          <IconButton color="inherit">
            <img  src={profileImage}  alt="Profile Picture"  style={{width : 75, height : 45}} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
