import React from 'react';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layout/Navbar'
import Index from './components/layout/Index'
import Lyric from './components/tracks/Lyric'
import {Provider} from './context'
import './App.css';

function App() {
  return (
    <Provider>
<Router>
      <React.Fragment>
   <Navbar/>
   <div className="container">
     <Switch>
       <Route exact path="/" component={Index} />
       <Route exact path="/lyrics/track/:id" component={Lyric} />
     </Switch>
   </div>
   </React.Fragment>
   </Router>
   </Provider>
  );
}

export default App;
