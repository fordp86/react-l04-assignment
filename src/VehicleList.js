import React from "react"
import faker from '@faker-js/faker'
import ListGroup from "react-bootstrap/ListGroup"
import Vehicle from "./Vehicle"

class VehicleList extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          vehicles: []
        }
      }


    vehicle(){
        let vehicles = []
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
            
        return this.props.vehicles.map((vehicle) => <ListGroup.Item 
                                        action active={ this.props.onVehicleSelected.bind(vehicle) } onClick={this.props.onVehicleSelected.bind(vehicle)} >
                                            <Vehicle vehicle="manufacturer" /> <Vehicle vehicle="model" />
                                        </ListGroup.Item>
        )
    }

    render(){
        return(
            <ListGroup className="w-50 align-self-start">
                {this.vehicle()}
            </ListGroup>
        )
    }
}
export default VehicleList