// src/components/PriorityBarChart.js

import React, { useEffect, useState } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, LabelList, ResponsiveContainer } from 'recharts';

const priorityColors = {
  HIGH: '#007bff', // Blue
  MEDIUM: '#ffc107', // Yellow
  LOW: '#dc3545' // Red
};

const PriorityBarChart = () => {
  const [chartData, setChartData] = useState([]);
  const theme = useTheme();

  useEffect(() => {
    fetch('https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do')
      .then((response) => response.json())
      .then((data) => {
        const priorityCounts = data.reduce((counts, task) => {
          counts[task.priority] = (counts[task.priority] || 0) + 1;
          return counts;
        }, {});

        const formattedData = Object.keys(priorityCounts).map((priority) => ({
          name: priority,
          count: priorityCounts[priority],
          fill: priorityColors[priority]
        }));

        setChartData(formattedData);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <Box 
      sx={{ 
        padding: { xs: '10px', md: '20px' }, // Adjust padding for different screen sizes
        width: { xs: '100%', sm: '95%', md: '80%' }, // Responsive width adjustments
        width: '95%', // Ensure the container does not exceed 95% width
        height: 'auto', 
        borderRadius: '10px',
        margin: '10px auto',
        border: '1px solid #D0D5DD',
        marginTop: '30px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' // Slight shadow for better visual separation
      }}
    >
      <Typography 
        variant="h6" 
        sx={{ 
          marginBottom: '10px', 
          textAlign: 'left', 
          fontSize: { xs: '14px', md: '16px' }, // Responsive font size
          fontWeight: 'bold'
        }}
      >
        Tasks by Priorities
      </Typography>
      <hr style={{ width: '100%' }} />
      <ResponsiveContainer width="50%" height={300}>
        <BarChart data={chartData} margin={{ top: 20, bottom: 20 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="white">
            <LabelList dataKey="count" position="top" style={{ fill: 'white' }} />
            {/* Add priority labels under each bar */}
            <LabelList dataKey="name" position="insideBottom" angle={0} style={{ fill: 'white', fontSize: '0' }} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
};

export default PriorityBarChart;
