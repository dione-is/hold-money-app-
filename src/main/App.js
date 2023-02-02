import 'bootswatch/dist/quartz/bootstrap.css';
import React from 'react';
import '../custom.css';
import Rotas from '../main/rotas';
import NavBar from '../components/nav-bar';

class App extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <div className='container'>
          <Rotas />
        </div>
      </>
    )
  }
}


export default App;
