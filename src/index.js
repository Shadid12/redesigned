import React from 'react';
import { render } from 'react-dom';
import UserDataStore from './stores/UserDataStore';
import App from './App';

render(<App store={UserDataStore}/>, document.getElementById('root'));