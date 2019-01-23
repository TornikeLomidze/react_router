import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './component/Header';
import Home   from './component/Home';
import About  from './component/About';
import New    from './component/New';
import Error  from './component/Error';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path='/' exact component={Home} />
                        <Route path='/about' component={About} />
                        <Route path='/new' component={New} />
                        <Route component={Error} />
                    </Switch>
                </div>
            </BrowserRouter>

      </div>
    );
  }
}

export default App;
