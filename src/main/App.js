import 'bootswatch/dist/quartz/bootstrap.css';
import React from 'react';
import '../custom.css';
import Rotas from '../main/rotas';
import NavBar from '../components/nav-bar';
import 'toastr/build/toastr.css';
import 'toastr/build/toastr.min.js';

import 'primereact/resources/themes/lara-light-indigo/theme.css';    
import 'primereact/resources/primereact.min.css';   
import 'primeicons/primeicons.css'; 
import ProvedorAutenticacao from './provedorAutenticacao';

class App extends React.Component {
  render() {
    return (
      <ProvedorAutenticacao>
        <NavBar />
        <div className='container'>
          <Rotas />
        </div>
      </ProvedorAutenticacao>
    )
  }
}


export default App;
