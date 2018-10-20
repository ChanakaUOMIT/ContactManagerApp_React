import React, { Component } from 'react';
import './App.css';
import Contact from './components/Contact';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {    
    return (
      <div className="App">
        <Header branding="Contact Manager" /> 
        <div className="container">
          <Contact 
            name="Chanaka"
            email="chanaka@gmail.com" 
            phone="888-888-8888"   
          />

          <Contact 
            name="Exmak dsd"
            email="sdfs@gmail.com"
            phone="777-888-9999"   
          />
        </div>  
      </div>
    );
  }
}

export default App;
