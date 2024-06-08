import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box,
  CircularProgress,
  Button
} from '@mui/material';
import '../styles/SideMenuBar.css';

import lowPriorityImg from '../imgs/low.png';
import mediumPriorityImg from '../imgs/medium.png';
import highPriorityImg from '../imgs/high.png';

import checkImg from '../imgs/check.svg';
import inProImg from '../imgs/inPro.png';

const TodoTable = () => {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [todosPerPage] = useState(8); // Number of todos per page

  useEffect(() => {
    // Fetch the data from the API
    fetch('https://6363c8f68a3337d9a2e7d805.mockapi.io/api/to-do')
      .then((response) => response.json())
      .then((data) => {
        setTodos(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  // Get current todos
  const indexOfLastTodo = currentPage * todosPerPage;
  const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
  const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', width: '80%', justifyContent: 'center', padding: '20px', marginTop: '200px' }}>
        <CircularProgress />
      </Box>
    );
  }

  const getPriorityImage = (priority) => {
    switch (priority) {
      case 'LOW':
        return lowPriorityImg;
      case 'MEDIUM':
        return mediumPriorityImg;
      case 'HIGH':
        return highPriorityImg;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ padding: '20px' }}>

      <TableContainer component={Paper}>
        <Typography variant="h4" sx={{ marginBottom: '5px', padding: '10px' }}>
          Tasks
        </Typography>
        <Table sx={{ minWidth: 650 }} aria-label="todo table">
          <TableHead sx={{ backgroundColor: '#F2F2F2' }}>
            <TableRow>
              <TableCell>Status</TableCell>
              <TableCell>Task Name</TableCell>
              <TableCell>Created by</TableCell>
              <TableCell>Priority</TableCell>
              <TableCell>Date</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentTodos.map((todo) => (
              <TableRow key={todo.id}>
                <TableCell>
                  <img src={todo.completed ? checkImg : inProImg} alt={todo.completed ? 'Completed' : 'In Progress'} style={{ width: 24, height: 24 }} />
                </TableCell>
                <TableCell>{todo.todo}</TableCell>
                <TableCell>{todo.createdBy}</TableCell>
                <TableCell>
                  <img
                    src={getPriorityImage(todo.priority)}
                    alt={`${todo.priority} priority`}
                    style={{ width: 50, height: 30 }}
                  />
                </TableCell>
                <TableCell>
                  {new Date(todo.createdAt).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          {/* Pagination Buttons */}
          <Button onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>{'<'}</Button>
          {[...Array(Math.ceil(todos.length / todosPerPage))].map((_, index) => (
            <Button key={index} onClick={() => paginate(index + 1)}>{index + 1}</Button>
          ))}
          <Button onClick={() => paginate(currentPage + 1)} disabled={currentPage === Math.ceil(todos.length / todosPerPage)}>{'>'}</Button>
        </Box>
      </TableContainer>
    </Box>
  );
};

export default TodoTable;
