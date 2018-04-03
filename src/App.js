import React, { Component } from 'react';
import './App.css';
import Car from './components/Car';

class App extends Component {
  state = {
    cars: [
      { id: 'ade3', make: 'Chevrolet', model: 'blazer' },
      { id: 'fre2', make: 'Ford', model: 'explorer' },
      { id: 'vbg6', make: 'Pontiac', model: 'firebird' }
    ],
    //otherState: 'some other value',
    showCars: false
  }
  toggleCarHandler = () => {
    const showMe = this.state.showCars;
    this.setState({showCars: !showMe});
  }
  deleteCarHandler = (carIndex) => {
    /*make copy to avoid issues using a reference in memory an mutating before changing state
    one way
    ---const cars = this.state.cars.slice();----
    the more recommended way below-- spread into new array*/
    const cars = [...this.state.cars]
    cars.splice(carIndex, 1);
    this.setState({cars: cars});

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
        {this.state.cars.map((car, carIndex) => {
          //copy new car object
          return <Car 
            click={this.deleteCarHandler.bind(this, carIndex)}
            make={car.make}
            model={car.model}
            key={car.id} />
        })}
        {/*
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
        /> */} 
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
