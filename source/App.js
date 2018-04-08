import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Table from './table/Table'
import InfoBlock from './info/InfoBlock'
import Header from './Header'
import './style.less';

class App extends React.Component {

  render() {

    return (
    <div>
      <Router>
      <div className="wrapper">
      	<Header />
        <div className="right-side">
        	<Switch>
        		<Route path="/info" component={InfoBlock}/> 
        		<Route path="/table" component={Table}/>
        	</Switch> 
        </div>
      	</div>
      </Router>
          </div>
    )
  }
}   

export default App;