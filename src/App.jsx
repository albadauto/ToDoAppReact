import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login';
import Main from './components/Main';
const App = () => {
    return ( 
        <Router>
            <Route path="/" exact component={Login}/>
            <Route path="/main" exact component={Main}></Route>
        </Router>
     );
}
 
export default App;