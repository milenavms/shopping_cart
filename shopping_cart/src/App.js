import React, { Component } from 'react';
import './styles/css/bootstrap.css';
import '../node_modules/jquery/dist/jquery.js'
import '../node_modules/popper.js';
import '../node_modules/bootstrap/dist/js/bootstrap.js';

import Navbar from './Componentes/Navbar';
import Body from './Componentes/Body';

class App extends Component {


  render(){     
    
    return (
      <div> 
        <header>
          <Navbar/> 
        </header> 
        <body>
          <Body/> 
        </body>        
      </div>
    );
  }
}

export default App;
