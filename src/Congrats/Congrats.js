import React from 'react'
import classes from './Congrats.module.css'

export default function Congrats(props) {
    const total = props.rightAnswered+props.wrongAnswered
    const right = props.rightAnswered
    const marks = Math.round((right/total)*100)
    return (
        <div className = {classes.Congrats}>
            <div className = {classes.headerDiv}>
                <div className={classes.headerDiv2}>
                    <img className ={classes.headerDivImg} src="https://www.byrdie.com/thmb/5LabFUFeXSjOFUzCs8KK-9otBGQ=/2341x1807/filters:no_upscale():max_bytes(150000):strip_icc()/mandy-moore-square-face-shape-56a084655f9b58eba4b13519.jpg"></img>
                    <p className = {classes.headerDivText}>Result</p>
                    <div className = {classes.bars}><i className="fas fa-bars"></i></div>
                </div>
            </div>
            <div className = {classes.CongratsControl}>
                <div className = {classes.upperDiv}>
                    <div className = {classes.circle}>
                        <div className = {classes.whiteCircle}>
                            <div className = {classes.marks}>{marks}</div>
                        </div>
                    </div>
                </div>
                <div className = {classes.lowerDiv}>
                    <p>Congratulations!</p>
                    <p>Your score is {marks} points.</p>
                </div>
                <button className = {classes.Button} onClick = {props.startAgain}>Home</button>
            </div>
        </div>
    )
}


// import React, { Component } from 'react'
// import classes from './Congrats.module.css'

// export default class Congrats extends Component {
//     render() {
//         console.log('[Congrats.js] render');
//         let total = this.props.rightAnswered+this.props.wrongAnswered
//         return (
//             <div className = {classes.Congrats}>
//                 <p>Result</p>
//                 <div className = {classes.CongratsControl}>
//                     <h2>CONGRATULATIONS</h2>
//                     <h4>You have Successfully completed this quiz.</h4>
//                     <p>Your score is : {this.props.rightAnswered}/{total}</p>
//                     <button className = {classes.Button} onClick = {this.props.startAgain}>Start Again</button>
//                 </div>
//             </div>
//         )
//     }
// }
