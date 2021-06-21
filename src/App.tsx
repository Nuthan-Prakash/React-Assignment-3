import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from './Components/Footer/Footer';
import { Dashboard } from './Components/Dashboard/Dashboard';
function App() {
  return (
    <div style={{backgroundColor:'black'}}>
      <Header></Header>
      <Footer></Footer>
    </div>

  );
}
//
export default App;
