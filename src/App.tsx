import React from 'react';
import './App.css';
import { Text } from './components/Text';
import { Emphasis } from './components/Emphasis';
import { Box } from './components/Box';

function App() {
  return (
    <div className="App">
      <Text as='a' href='https://www.google.com'>Visit google</Text>
      <br/><br/>
      <Text as={Emphasis}>Hello!</Text>
      <br/><br/>
      <Text color='red' style={{backgroundColor: 'greenyellow'}}>Component with custom color prop</Text>
      <br/><br/>
      <Box borderStyle='dotted'>This is a box</Box>
    </div>
  );
}

export default App;
