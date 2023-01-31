import { render } from '@testing-library/react';
import React from 'react';
import './App.css';

class App extends React.Component {
  state =  {
    nome :'Dione Santos'
  }
  render() {
    return (
      <div>
        <label>Nome:</label>
        <input type="text" value={this.state.nome} onChange={(e) => this.setState({nome: e.target.value})}/>
        o nome digitado foi: {this.state.nome}
      </div>
    );
  }
}


export default App;
