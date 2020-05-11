import React from 'react';
import './resources/css/bootstrap.min.css'
import './resources/css/normalize.css'
import './resources/css/main.css'

import { createProvider, SharedStore } from 'react-shared-state'

import Main from './components/Main.componant'
function App() {
  return (
    <Main/>
  );
}

export default App;
