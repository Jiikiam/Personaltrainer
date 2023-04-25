import './App.css';
import Customerlist from './comps/CustomerList';
import Traininglist from './comps/TrainingList';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import { AppBar,Toolbar, Typography } from '@mui/material';
import Button from'@mui/material/Button';

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

           <Routes>
                  <Route exact path='/' element={< Customerlist />}></Route>
                  <Route exact path='/trainings/:id' element={< Traininglist />}></Route>
          </Routes>
          </div>
       </Router>


    </div>
  );
}
export default App