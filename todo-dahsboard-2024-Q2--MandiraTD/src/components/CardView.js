// src/components/CardView.js

import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

const CardView = () => {
  return (
    <Box sx={{ position: 'absolute', top: '80px', right: '0', left: '260px', padding: '20px' , marginTop: '10px'}}>
      <Card sx={{ width: '100%', height: '150px', backgroundColor: 'white', borderRadius: '5px', border: '1px solid #D0D5DD' }}>
        <CardContent>
          <Typography variant="h5" component="div" sx={{ fontWeight: 'bold' }}>
            Welcome back, John Doe
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ marginTop: '10px' }}>
            The end of the year is coming. Are you planning your performance interviews? You can do this super efficiently with Acmy.
            <p sx={{ color: '#BC006D' }}><a href='Look here for more information'>Look here for more information</a></p>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CardView;
