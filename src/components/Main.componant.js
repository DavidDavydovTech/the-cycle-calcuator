import React from 'react';
import {
    Container,
    Row,
    Col,

    Popover,
    OverlayTrigger,

    Accordion,
    Card,

    Button,
    ButtonGroup,


} from 'react-bootstrap'
import { Blurhash } from 'react-blurhash';
import { HuePicker } from 'react-color';

import '../resources/css/bootstrap.min.css'

import IconKitBasic from '../resources/images/icon_kits_basic.png';
import HeartPlusIcon from '../resources/images/Heart_Plus-Icon.png';
import ClockTimerIcon from '../resources/images/Clock_Timer-Icon.png';

import Kor from '../resources/images/250px-KOR-47.png'
import ExplosiveAmmo from '../resources/images/the-cycle-icons/mod/UI_Items_Mods_Explosives.png'
import Aiming from '../resources/images/the-cycle-icons/mod/UI_Items_Mods_aiming.png'
import Recoil from '../resources/images/the-cycle-icons/mod/UI_Items_Mods_recoil.png'
import Ammo from '../resources/images/the-cycle-icons/mod/UI_Items_Mods_Ammo.png'

import IconHolder from './IconHolder.component';

class Main extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            loadouts: [
                {
                    name: "Build",
                    color: Math.floor(Math.random()*16777215).toString(16),
                    toggles: {},

                },
                {
                    name: "Build",
                    color: Math.floor(Math.random()*16777215).toString(16),
                    toggles: {},

                },


            ]

        }
    }

    testCard = (build, i) => {
        
        return (
        
        <Card text="light" className="no-color">
            <Card.Header className="darkest-color">
                <Row  style={{marginTop: "0.5rem"}}>
                    <Col xs={"auto"}>
                        <h3>{`${build.name} ${i+1}`}</h3>
                        
                    </Col>

                    <Accordion.Toggle className="click-me col-xs-auto" as={Col} variant="link" eventKey={`${i}`}>
                        <br></br>
                    </Accordion.Toggle>

                    <Col xs={"auto"}>
                    <OverlayTrigger
                    trigger="click" 
                    placement="bottom" 
                    overlay={
                        <Popover>
                            <HuePicker color={build.color}/>
                        </Popover>
                    }>
                        <div id="TooltipExample"  className="swatch" onClick={ this.handleClick }>
                            <div style={{backgroundColor: `#${build.color}`}} className="color" />
                        </div>
                    </OverlayTrigger>


                    </Col>
                </Row>
            
            </Card.Header>
            <Accordion.Collapse className="darker-color-accordian" eventKey={`${i}`}><Row>
                <Col md="12"><Card.Body style={{marginBottom: "0rem"}}>
                    <h4 style={{marginBottom: "1.5rem"}}>Kit</h4>
                    <Row className="justify-content-center p-2">
                        
                        <Col className="item-sizer item-main-breather">
                            <IconHolder name={"Basic Propspector Suit"} image={IconKitBasic}/>  
                        
                        </Col>

                        <Col className="item-sizer">
                            <IconHolder name={"XP Gain"} image={IconKitBasic}/>  

                        </Col>

                        <Col className="item-sizer">
                            <IconHolder name={"Improved Regen "} image={HeartPlusIcon}/>  
                        
                        </Col>

                        <Col className="item-sizer">
                            <IconHolder tooltipDirection={"left"} name={"Faster Ability Cooldowns "} image={ClockTimerIcon}/>  
                        
                        </Col>

                        <Col className="item-sizer">
                            <IconHolder tooltipDirection={"left"} missing/>  
                        
                        </Col>
                    </Row>
                


                    
                </Card.Body></Col>

                <Col md="12"><Card.Body style={{marginBottom: "0rem"}}>
                    <h4 style={{marginBottom: "1.5rem"}}>Weapon</h4>
                    <Row className="justify-content-center p-2">
                        
                        <Col className="item-sizer item-main-breather">
                            <IconHolder 
                            name={"KOR-47"} 
                            tooltip={<div>
                                The KOR Bullpup Automatic Rifle 2247, more commonly known as the KOR-47, is Korolev Heavy Industries' Signature weapon and a mainstay of many national and private armed forces
                                <br/>
                                <br/>
                                Heavy and made to last, the KOR-47 has a lower firing rate than most competing weapons in its class, but its devastating 9.80mm JSP rounds messily make up the difference.
                            </div>} 
                            image={Kor}/>  
                        
                        </Col>

                        <Col className="item-sizer">
                            <IconHolder name={"Holographic Sight "} image={Aiming}/>  
                        
                        </Col>

                        <Col className="item-sizer">
                            <IconHolder name={"Heavy Stock"} image={Recoil}/>  
                        
                        </Col>

                        <Col className="item-sizer">
                            <IconHolder tooltipDirection={"left"} name={"Rapid Cycler"} image={Ammo}/>  
                        
                        </Col>

                        <Col className="item-sizer">
                            <IconHolder tooltipDirection={"left"} name={"Explosive Rounds"} image={ExplosiveAmmo}/>  
                        
                        </Col>
                    </Row>
                


                    
                </Card.Body></Col>
                
                        
            </Row></Accordion.Collapse>
        </Card>

        )
    }

    render(){return(<>

        <div className="top-left hide-scroll">
            <div className="top-left-starter darkest-color" />
            <Accordion className="hide-scroll-accordian" defaultActiveKey="0">
                {this.state.loadouts.map((build, i) => (
                    this.testCard(build, i)
                ))}
            </Accordion>
            <div className="top-left-capper darkest-color" />
            {/* <div className="shadow-main-outer top-left-capper" style={{zIndex: "1"}}/> */}
                
        </div>

        <div className="bottom-left hide-scroll">
            <Card className=" shadow-main-outer darkest-color">
                <ButtonGroup className="no-color">
                    <Button className="no-color nohover">
                        <b>+ Add</b>
                    </Button>
                    <Button className="no-color nohover">
                        <b>- Remove</b>
                    </Button>
                    <Button className="no-color nohover">
                        <b>Export</b>
                    </Button>
                    <Button className="hidden-graph-button no-color">
                        <b>Show Graph</b>
                    </Button>
                </ButtonGroup>
            </Card>
        </div>

        <div className="top-right dynamic-hide">
            <Card className="shadow-main-outer top-cutter darkest-color" style={{height: "100%"}}>
                <Card className="shadow-main-inner darker-color" style={{color: "white", height: "100%", margin: "1rem"}}>
                    WARNING COULD NOT LOAD GRAPH DATA
                </Card>
            </Card>
        </div>

        <div className="bottom-right hide-scroll dynamic-hide">
            <Card className=" shadow-main-outer darkest-color">
                <ButtonGroup className="no-color">
                    <Button className="no-color nohover">
                        <b>App Options</b>
                    </Button>
                    <Button className="no-color nohover">
                        <b>Data Output Options</b>
                    </Button>
                    <Button className="no-color nohover">
                        <b>?</b>
                    </Button>
                    <Button className="hidden-graph-button no-color">
                        <b>Show Builds</b>
                    </Button>
                </ButtonGroup>
            </Card>
        </div>

    
    <div className="backgroundDiv"/>

    <div style={{all: "unset", position: 'fixed', top: "0", left: "0", zIndex: "-100"}}>
        <Blurhash
            hash="LC9Q5-Rg0eWY%7W9V?j]0dog^jog"
            width={window.innerWidth}
            height={window.innerHeight}
            resolutionX={32}
            resolutionY={32}
            punch={1}
        />
    </div>


    </>)}
}

export default Main;