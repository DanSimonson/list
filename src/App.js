import React, { Component } from 'react';
import './App.css';
import Car from './components/Car';

class App extends Component {
  state = {
    cars: [
      { make: 'Chevrolet', model: 'blazer' },
      { make: 'Ford', model: 'explorer' },
      { make: 'Pontiac', model: 'firebird' }
    ],
    //otherState: 'some other value',
    showCars: false
  }
  toggleCarHandler = () => {
    const showMe = this.state.showCars;
    this.setState({showCars: !showMe});
  }
  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let cars = null;
    if(this.state.showCars) {
      cars = (
        <div>
         <Car 
          make={this.state.cars[0].make} 
          model={this.state.cars[0].model} 
        />
        <Car 
          make={this.state.cars[1].make} 
          model={this.state.cars[1].model} 
        />
        <Car 
          make={this.state.cars[2].make} 
          model={this.state.cars[2].model} 
        />  
        </div>
      );
    }
    return (
      <div className="App">
       <button style={style} onClick={this.toggleCarHandler}>Toggle Cars</button>
       {cars}
      </div>
    );
  }
}

export default App;
