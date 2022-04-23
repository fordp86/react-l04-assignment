import React from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

class Vehicle extends React.Component {

render() {
    if (this.props.vehicle===null) {
        return (
            <Card className="w-50 align-self-start">
                <Card.Body>
                    <Card.Title>No Vehicle Selected</Card.Title>
                    <Card.Text>
                        Click a vehicle on the left to see more details
                    </Card.Text>
                </Card.Body>
            </Card>
        )

    } else {
        let { manufacturer, model, vin, fuel, type, color } = this.props.vehicle;

        return (
            <Card className="w-50 align-self-start">
                <Card.Img variant="top" src={`https://via.placeholder.com/180x150?text=${manufacturer} ${model}`} />
                <Card.Body>
                    <Card.Title>{manufacturer} {model}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{vin}</Card.Subtitle>
                    <Card.Text>
                        This is a wonderful {fuel}-powered {color} {type}.
                    </Card.Text>
                    <Button>Buy Now!</Button>
                </Card.Body>
            </Card>
        )

    }
}

}

export default Vehicle;