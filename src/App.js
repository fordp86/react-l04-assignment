import React from 'react';
import Stack from 'react-bootstrap/Stack'
import Vehicle from './Vehicle';
import faker from '@faker-js/faker'
import VehicleList from './VehicleList';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { vehicles: this.getSomeVehicles(), selected: null };
    this.handleSelected = this.handleSelected.bind(this);
  }

  getSomeVehicles() {
    let vehicles = [];
    for (let i = 0; i < 10; i++) {
      vehicles.push({
        manufacturer: faker.vehicle.manufacturer(),
        model: faker.vehicle.model(),
        type: faker.vehicle.type(),
        fuel: faker.vehicle.fuel(),
        vin: faker.vehicle.vin(),
        color: faker.vehicle.color()
      })
    }
    return vehicles;
  }

  handleSelected(vehicle) {
    this.setState({ selected: vehicle });
  }

  render() {
    return (
      <Stack gap={3} direction="horizontal" className="p-5 col-md-10 offset-md-1">
        <VehicleList vehicles={this.state.vehicles} selected={this.state.selected} handleSelected={this.handleSelected} />
        <Vehicle vehicle={this.state.selected} />
      </Stack>
    )
  }
}


export default App;