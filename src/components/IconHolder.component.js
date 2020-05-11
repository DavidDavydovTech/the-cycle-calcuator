import React from 'react';
import { Card, Tooltip, OverlayTrigger } from 'react-bootstrap'
import Hyphenated  from 'react-hyphen';

import Unspecified from '../resources/images/icons8-file-delete-96.png'
import Missing from '../resources/images/icons8-unavailable-480.png';

class IconHolder extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            tooltip: this.props.missing?(this.props.tooltip?this.props.tooltip:`${this.props.parentName?`The ${this.props.parentName}`:"This peice of equipment"} does not have access to this modification slot.`):(this.props.tooltip?this.props.tooltip:"The tooltip for this equipment or modification is missing, please contact the creators."),

            image: this.props.missing?(Missing):(this.props.image?this.props.image:Unspecified),

            name: this.props.missing?("Locked Slot"):(this.props.name?this.props.name:"Unspecified"),

            tooltipDirection: this.props.tooltipDirection?this.props.tooltipDirection:"right"
        }


    }

    render(){return(<Card className={this.props.missing?"no-color disabled-item dont-click-me":"no-color click-me"} style={{width: "100%"}}>
        <OverlayTrigger
        placement={this.state.tooltipDirection}
        overlay={
            <Tooltip>
                <Hyphenated>
                    {this.state.tooltip}

                </Hyphenated>
                
            </Tooltip>
            
        }
        >   
        <div style={{backgroundImage: `url(${this.state.image})`}} className="image-icon-sizer">

        </div>
            
        </OverlayTrigger>


        {/* <Hyphenated> */}
            <Card.Text className="item-text-resize">
                {this.state.name}

            </Card.Text>
        {/* </Hyphenated> */}

    </Card>)}
}

export default IconHolder;