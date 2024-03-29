import React from 'react';
import './style.css'
import ExpTimer from "./Components/Timer";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import Button from "reactstrap/es/Button";
import { library } from '@fortawesome/fontawesome-svg-core'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import Item from "./Components/Item";
library.add(faShoppingCart);

const image0 = require('./images/item0.jpg');
const image1 = require('./images/item1.jpg');
const image2 = require('./images/item2.jpg');
const image3 = require('./images/item3.jpg');
const image4 = require('./images/item4.jpg');
const image5 = require('./images/item5.jpg');

const team_img = require('./images/team.JPG');

export default class App extends React.Component {

  constructor(props){
    super(props);

    this.state={
        items: [
            {id:0, name: "A Science Bow Tie", image:image2, description:"Top bow tie :)"},
            {id:1, name: "A Steam Punk Bow Tie", image:image3, description:"An super elegant bow tie :)"},
            {id:2, name: "Iron Man Bow Tie", image:image4, description:"Super limited bow tie"},
            {id:3, name: "A Math Bow Tie (Stokes' theorem)", image:image0, description:"An elegant bow tie for a smart guy."},
            {id:4, name: "A Math Bow Tie (Hopf fibration)", image:image1, description:"An elegant bow tie for a smart guy."},
            {id:5, name: "A Math Bow Tie (Maxwell's equations)", image:image5, description:"Last bow tie in our collection"}
        ]
    }

  }

  componentDidMount() {

  }

  renderElemets(array){
      const items = [];
      for (let i=0; i < array.length; i++) {
          items.push(<Item key={"item"+array[i].id} iname={array[i].name} image={String(array[i].image)} description={array[i].description}/>)

      }
      return items;

  }

  render() {
    return (
        <div className={"App-container"}>
            <div className={"content-container"}>
                <h1 className={"text-center"} style={{marginTop: "8px",marginBottom: "32px", color: "white" }}><b>Sciencishbowties showroom</b></h1>
                <Row>
                    <Col/>
                    <Col xl={"7"} sm={"12"}>
                        <ExpTimer/>
                    </Col>
                    <Col/>
                </Row>
                <h2 className={"text-center"} style={{marginTop: "8px",marginBottom: "10px", color: "white" }}><b>Our products</b></h2>
                <Row>
                    <Col/>
                    <Col xl={"9"} xs={"10"}>
                        <Row>
                            {this.renderElemets(this.state.items)}
                        </Row>

                    </Col>
                    <Col/>
                </Row>
                <h2 className={"text-center"} style={{marginTop: "8px",marginBottom: "10px", color: "white" }}><b>Our team</b></h2>
                <Row>
                    <Col/>
                    <Col className={"text-center"} sm={"12"} md={5}>
                        <img className={"img-fluid"} src={String(team_img)} alt={"Our team"}/>
                    </Col>
                    <Col md={4}>
                        <ul style={{color: "white", fontSize: "18pt"}}>
                            <li>Ekaterina Nguyen</li>
                            <li>Zlata Besedovskaya</li>
                            <li>Anastasia Zvorykina</li>
                            <li>Valery Ilin</li>
                            <li>Daniil Svirskii</li>
                        </ul>
                    </Col>
                    <Col/>
                </Row>
                <h2 className={"text-center"} style={{marginTop: "32px",marginBottom: "10px", color: "white" }}><b>Contacts</b></h2>
                <Row>
                    <Col/>
                    <Col sm={12} md={4}>
                        <Button block color={"primary"} href={"mailto: sciencishbowties@gmail.com"}>Sent an email</Button>
                        <Button block color={"primary"} href={"https://vk.com/sciencishbowties"}>VK Group</Button>
                    </Col>
                    <Col/>
                </Row>


            </div>


        </div>

    );
  }
}
