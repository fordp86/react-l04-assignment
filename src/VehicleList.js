import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

class VehicleList extends React.Component {

    item(vehicle) {
        return (
            <ListGroup.Item action active={this.props.selected === vehicle} onClick={this.props.handleSelected.bind(this, vehicle)}>
                {vehicle.manufacturer} {vehicle.model}
            </ListGroup.Item>
        )
    }

    render() {
        return (
            <ListGroup className='w-50 align-self-start'>
                { this.props.vehicles.map((vehicle) => this.item(vehicle) )}
            </ListGroup>
        )
    }

}

export default VehicleList;