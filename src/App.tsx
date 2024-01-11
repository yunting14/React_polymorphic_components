import React from 'react';
import './App.css';
import {Emphasis, Text} from './components/Text';

function App() {
  return (
    <div className="App">
      <Text as='a' href='https://www.google.com'>Visit google</Text>
      <br/><br/>
      <Text as={Emphasis}>Hello!</Text>
      <br/><br/>
      <Text color='red' style={{backgroundColor: 'greenyellow'}}>Component with custom color prop</Text>
    </div>
  );
}

export default App;
