// App.js

import React from 'react';
import { BrowserRouter as Router, Routes ,Route} from 'react-router-dom';
import RegistrationForm from './component/RegistrationFrom';
//import LoginForm from './LoginForm';

function App() {
  return (
    <div className='App'>
    <Routes>
        <Route path="/register" component={RegistrationForm} />
        
    </Routes>
    </div>
  );
}

export default App;
