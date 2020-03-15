import React, { Component } from 'react';
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
import ApartmentList from './components/ApartmentList';

class App extends Component {
  render (){
    return (
    <div>
    <Navbar/>
    <ApartmentList/>
    </div>
    );
  }

}
export default App;
