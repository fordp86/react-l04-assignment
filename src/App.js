import React from 'react';
import Vehicle from './Vehicle';
import VehicleList from './VehicleList';
import Stack from 'react-bootstrap/Stack';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = { vehicles: [] }
  }
  render(){
    return (
      <Stack gap={3} direction="horizontal" className="p-5 col-md-10 offset-md-1">
        <VehicleList />
        <Vehicle />
      </Stack>
    );
  }
}

export default App;
