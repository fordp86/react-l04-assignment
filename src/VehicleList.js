import React from "react"
import faker from '@faker-js/faker'
import ListGroup from "react-bootstrap/ListGroup"

class VehicleList extends React.Component{

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
            
        return vehicles.map((vehicle) => <ListGroup.Item 
                                        action key={vehicle.vin}>
                                            {vehicle.manufacturer} {vehicle.model}
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