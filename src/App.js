import React from 'react';
import './style.css'
import ExpTimer from "./Components/Timer";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import Button from "reactstrap/es/Button";
import { library } from '@fortawesome/fontawesome-svg-core'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Item from "./Components/Item";
library.add(faShoppingCart);

const image0 = require('./images/item0.png');


export default class App extends React.Component {

  constructor(props){
    super(props);

    this.state={
        items: [
            {id:0, name: "A Math Bow Tie", image:image0, description:"An elegant bow tie for a smart guy."},
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
                    <Col xl={"6"} sm={"12"}>
                        <ExpTimer/>
                    </Col>
                    <Col/>
                </Row>
                <Row>
                    <Col/>

                    {this.renderElemets(this.state.items)}
                    <Col/>

                </Row>
                <Row style={{marginTop:"32px"}}>
                    <Col/>
                    <Col xl={"6"} sm={"12"} className={"text-center"}>
                        <Button size={"lg"} color={"primary"} href={"https://vk.com/market-183933258"}><FontAwesomeIcon icon={"shopping-cart"} style={{marginRight: "8px"}}/>Start shopping!</Button>
                    </Col>
                    <Col/>
                </Row>

            </div>


        </div>

    );
  }
}
