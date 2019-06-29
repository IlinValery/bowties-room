import React from 'react';
import './style.css'
import Col from "reactstrap/es/Col";

import Card from "reactstrap/es/Card";
import CardImg from "reactstrap/es/CardImg";
import CardBody from "reactstrap/es/CardBody";
import CardText from "reactstrap/es/CardText";
import CardTitle from "reactstrap/es/CardTitle";




export default class Item extends React.Component {



    render() {
        return (
            <Col sm={"4"} xs={"12"} lg={"4"} style={{marginBottom: "16px"}}>
                <Card className={"text-center"} body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                    <CardImg top width="50%" src={this.props.image} alt={this.props.iname} />
                    <CardBody>
                        <CardTitle>{this.props.iname}</CardTitle>
                        <CardText>{this.props.description}</CardText>
                    </CardBody>
                </Card>

            </Col>

        );
    }
}
