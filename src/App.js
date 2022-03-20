import {Box, Button} from '@mui/material'
import logo from './logo.svg';
import './App.css';
import _ from 'lodash';

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
        <Button>Test</Button>
        <Box>
          {_.camelCase('hello world')}
        </Box>
      </header>
    </div>
  );
}

export default App;
