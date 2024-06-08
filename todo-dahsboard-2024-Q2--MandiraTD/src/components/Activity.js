// src/components/BoxSystemProps.js

import * as React from 'react';
import { Box, Typography } from '@mui/material';
import '../styles/App.css'; // Make sure to add responsive styles here

import img1 from '../imgs/img1.svg';
import img2 from '../imgs/img2.svg';
import img3 from '../imgs/img3.svg';

export default function BoxSystemProps() {
  return (
    <Box 
      sx={{
        padding: '20px',
        width: '99%',
        height: 'auto', // Change to 'auto' to allow height to adjust based on content
        margin: '10px auto',
        border: '1px solid #D0D5DD',
        marginTop: '5px',
        borderRadius: '10px',
        boxSizing: 'border-box'
      }}
    >
      <Typography 
        variant="h4" 
        sx={{
          marginBottom: '10px',
          textAlign: 'left',
          fontSize: { xs: '14px', md: '16px' }, // Responsive font size
          fontWeight: 'bold'
        }}
      >
        Activity Feed
      </Typography>
      <hr />
      
      <div className="activity-feed">
        <div className="aligned">
          <img src={img1} className="activity-image" alt="Activity 1" />
          <div className="activity-details">
            <p>Kushantha Charuka created Contract #00124 need <br /> 
              <span className='a2'>John Beige’s signature</span><br />
              <span className='a1'>Sep 16, 2022 at 11:30 AM</span>
            </p>
          </div>
        </div>
        <hr />

        <div className="aligned">
          <img src={img2} className="activity-image" alt="Activity 2" />
          <div className="activity-details">
            <p>Kushantha Charuka created Contract #00124 need <br /> 
              <span className='a2'>John Beige’s signature</span><br />
              <span className='a1'>Sep 16, 2022 at 11:30 AM</span>
            </p>
          </div>
        </div>
        <hr />

        <div className="aligned">
          <img src={img3} className="activity-image" alt="Activity 3" />
          <div className="activity-details">
            <p>Kushantha Charuka created Contract #00124 need <br /> 
              <span className='a2'>John Beige’s signature</span><br />
              <span className='a1'>Sep 16, 2022 at 11:30 AM</span>
            </p>
          </div>
        </div>
        <hr />
      </div>
    </Box>
  );
}
