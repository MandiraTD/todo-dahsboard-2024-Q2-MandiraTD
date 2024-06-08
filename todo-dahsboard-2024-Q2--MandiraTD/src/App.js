// src/App.js

import React from 'react';
import './styles/SideMenuBar.css'; // Main App styles
import './styles/App.css';
import SideMenuBar from './components/Menu';
import TopHeader from './components/TopHeader';
import CardView from './components/CardView';
import { Box } from '@mui/material';
import Table from './components/Table';
import Chart from './components/Chart';
import Activity from './components/Activity';

const App = () => {
  return (
    <div className="App" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr' }}>
      <SideMenuBar />
      <div className="Content">
        <TopHeader />
        <Box sx={{ marginTop: '40px', marginBottom: '20px' }}>
          <CardView />
        </Box>
        <Box sx={{ 
          marginTop: '100px', 
          display: 'flex', 
          justifyContent: 'space-between' ,
          gap: '20px' 
        }}>
         
          <Box sx={{ flex: '1' }}>
            <Table />
          </Box>

         
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            flex: '1', 
            gap: '10px' 
          }}>
            <Chart />
            <Activity />
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default App;
