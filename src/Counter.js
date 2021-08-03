import React, { Component } from 'react';
import './Counter.css';

import Display from './Display';
import ButtonsPanel from './ButtonsPanel';
//import Clock from './Clock';
import ClockFunctional from './ClockFunctional';
import Step from './Step';


//------------------- class-----------------------------//

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counterValue: this.props.initValue,
            showClock: true,
            stepValue: 5,
        };
    }

    changeValue = (action) => {


        this.setState((prevState, prevProps) => {

            let currentCounterValue = prevState.counterValue;
            
            if (action === 'add') {
                currentCounterValue += this.state.stepValue;
            } else if (action === 'reinit') {
                currentCounterValue = prevProps.initValue;
            } else {
                currentCounterValue = 0;
            }

            return ({
                    counterValue: currentCounterValue
                });
        });
    }



    toggleClock = () => {
        this.setState((prevState) => {
            return({
                showClock: !prevState.showClock
            });
        })
    } 


    setStep  = (value) => {
        this.setState({stepValue: Number(value)})
    }

    render() {

        let clockElement = '';

        if (this.state.showClock) {
            clockElement = <ClockFunctional toggleClockMethod={this.toggleClock} />;
           // clockElement = <Clock toggleClockMethod={this.toggleClock} />;
        } else {
            clockElement = <span className="show-clock" onClick={this.toggleClock}>show clock</span>;
        }
    

    return(
            <div className="counter">
            Counter:
            <Display displayValue={this.state.counterValue} />
            <ButtonsPanel buttonMethod={this.changeValue} value={this.state.stepValue} />
            <Step setStep={this.setStep} value={this.state.stepValue} />
            {clockElement}
            </div>
        );
    }
}

export default Counter;






//---------------------------------------------------------
// function Counter(props) {

//     let randomNumber = Math.floor(Math.random() * (108 - 1 + 1) + 1)
//     return (
//         <div className="counter">
//             Counter:
//             <span className="value">
//                 {props.initValue}
//             </span>
//         </div>
//     );
// }

// export default Counter;
