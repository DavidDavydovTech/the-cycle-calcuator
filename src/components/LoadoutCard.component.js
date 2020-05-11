import React from 'react';
import {
    Collapse,
    Row,
    Col,

    Card,
    
    Popover,

    Tooltip,


  } from 'react-bootstrap'
import { ChromePicker } from 'react-color';

class loadoutCard extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            name: props.name?props.name:"Generic Loadout",
            color: { r: 51, g: 51, b: 51 },
            isOpen: true,
            toggles: {
                colorPicker: false
            }
        }

    }

    toggleAnything = (target) => {
        let tempState = Object.assign({}, this.state.toggles);

        tempState[target] = tempState[target]?false:true;

        this.setState({toggles: tempState})
    }

    toggleCard = () => {
        this.setState({
            isOpen: this.state.isOpen?false:true
        })
    }

    render(){return(<Card inverse className="darker-color">

        <Card.Header id="TestMe">
            <Row className="align-items-center">
                <Col className="click-me" onClick={this.toggleCard}>
                    <h3 style={{marginBottom: "0px"}}>{this.state.name}</h3>
                </Col>
                <Col className="col-md-auto">
                    <div id="TooltipExample" className="swatch" onClick={ this.handleClick }>
                        <div className="color" />
                    </div>
                </Col>
            </Row>



            
            <Popover  
                placement="top" 
                placementPrefix=""
                target="TooltipExample" 

                trigger={"click"}

                modifiers={{}}
                ClassName="darker-color"

                isOpen={this.state.toggles.colorPicker} 
                toggle={() => this.toggleAnything("colorPicker")}>
                
                <ChromePicker
                    color={this.state.color}
                />
            </Popover >
        </Card.Header>
        <Collapse className="darker-color" isOpen={this.state.isOpen}><Card.Body>
        
            <Card.Title>Special Title Treatment</Card.Title>

            <Card.Text>With supporting text below as a natural lead-in to additional content.</Card.Text>
        
        </Card.Body></Collapse>
        
    </Card>)}
}

export default loadoutCard;