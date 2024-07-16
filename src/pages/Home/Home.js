import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Home extends Component {
  render() {
    return (
      <div>
        <h1>Página Home</h1>

        <Link to="/sobre">Ir para página SOBRE</Link><br/>
        <Link to="/contact">Ir para página CONTATO</Link>
        <hr/>
      </div>
    );
  }
}