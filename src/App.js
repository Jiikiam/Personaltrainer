import React from 'react';
import './App.css';
import CustomerList from './comps/CustomerList';
import TrainingList from './comps/TrainingList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppBar, Toolbar, Typography } from '@mui/material';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">

          </Typography>
        </Toolbar>
      </AppBar>
      <Router>
        <div>

          <Button href="/">Customers</Button>
          <Route exact path='/' element={< CustomerList />}></Route>
          <Route exact path='/trainings/:id' element={< TrainingList />}></Route>

        </div>
      </Router>


    </div>
  );
}
export default App