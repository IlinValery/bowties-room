import React from 'react';
import './style.css'
import Alert from "reactstrap/es/Alert";
import Row from "reactstrap/es/Row";
import Col from "reactstrap/es/Col";
import Button from "reactstrap/es/Button";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class ExpTimer extends React.Component {

    constructor(props){
        super(props);

        this.state={
            expiration_date: 1558344909061,
            milisecsRemaining: 0,
            isOver:false,
            time: {}
        };
        this.countDown  = this.countDown.bind(this)

    }
    startTimer(){
        setInterval(this.countDown,500);
    }

    countDown() {
        let milisecsRemaining = this.state.milisecsRemaining - 500;
        this.setState({
            milisecsRemaining: milisecsRemaining,
        });

        if (milisecsRemaining < 900) {
            this.setState({isOver:true})

        }
    }

    componentWillMount() {
        let cur_date = new Date();
        let exp_date = new Date(2019, 5,29,22,30,0);

        let milisecsRemaining = exp_date-cur_date;
        this.setState({
            expiration_date: exp_date,
            milisecsRemaining: exp_date-cur_date

        })
        if (milisecsRemaining < 900) {
            this.setState({isOver:true})

        }

    }
    renderRemainingTime(milis){
        let hours = ("0"+parseInt(milis/(60*1000*60))).slice(-2);
        let mins = ("0"+parseInt((milis-hours*60*1000*60)/(60*1000))).slice(-2);
        let secs = ("0"+parseInt((milis-hours*60*1000*60-mins*60*1000)/1000)).slice(-2);
        return hours+":"+mins+":"+secs
    }
    render() {
        if (this.state.isOver){
            return (
                <Alert color={"success"}  className={"text-center"}>
                    <h3 className={"text-center"}>Our shop was closed</h3>
                </Alert>

            );
        } else {
            return (
                <Alert color={"danger"}  className={"text-center"}>
                    <h3 className={"text-center"}>Our shop will be closed in</h3>
                    <h3>{this.renderRemainingTime(this.state.milisecsRemaining)}</h3>
                    <Row style={{marginTop:"10px"}}>
                        <Col/>
                        <Col xl={"6"} sm={"12"} className={"text-center"}>
                            <Button size={"lg"} color={"primary"} href={"https://vk.com/market-183933258"}><FontAwesomeIcon icon={"shopping-cart"} style={{marginRight: "8px"}}/>Start shopping!</Button>
                        </Col>
                        <Col/>
                    </Row>
                </Alert>

            );
        }

    }
    componentDidMount() {
        this.startTimer()
    }

    componentDidUpdate(prevState) {
        if (prevState.milisecsRemaining!==this.state.milisecsRemaining){
        }
    }
}
