import React from "react"
import faker from '@faker-js/faker'
import ListGroup from "react-bootstrap/ListGroup"
import Vehicle from "./Vehicle"

class VehicleList extends React.Component{
    constructor(props){
        super(props)
        this.vehicles = []
        this.generateVehicles = this.generateVehicles.bind(this)
      }

    generateVehicles(){
        let vehicles = this.vehicles
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
      
    }

    vehicle() {
        return this.props.vehicles.map((vehicle) => <ListGroup.Item >
        <Vehicle vehicle={vehicle} />
      </ListGroup.Item>)
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