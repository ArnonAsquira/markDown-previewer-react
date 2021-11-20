import './css/main.css';
import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Main } from './new-post';

class App extends React.Component {
    render() {
        return (
              <Routes>
                    <Route path='' element={ <Main /> } ></Route>
                    <Route path={'posts'} element={ <Main /> }></Route>
                   {/*  <Route path={'home'}></Route> */}
              </Routes>
        )
    }
} 

ReactDOM.render(<Router>< App /></Router>, document.getElementById('root'));