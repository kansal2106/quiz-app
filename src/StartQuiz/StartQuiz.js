import React from 'react'
import classes from './StartQuiz.module.css'

export default function StartQuiz(props) {
    let pinkClass = [classes.Subject]
    if(props.selectedSubject) {
        pinkClass.push(classes.Pink)
    }
    return (
        <div className = {classes.StartQuiz}>
            <div className = {classes.headerDiv}>
                <div className={classes.headerDiv2}>
                    <img className ={classes.headerDivImg} src="https://www.byrdie.com/thmb/5LabFUFeXSjOFUzCs8KK-9otBGQ=/2341x1807/filters:no_upscale():max_bytes(150000):strip_icc()/mandy-moore-square-face-shape-56a084655f9b58eba4b13519.jpg"></img>
                    <h3 className = {classes.headerDivText}>Quizes</h3>
                    <div className = {classes.bars}><i className="fas fa-bars"></i></div>
                </div>
            </div>
            <div className = {classes.Subjects}>
                {props.subjects.map((subject,index) => {
                    return (
                        <div 
                            className = {props.selectedSubject===subject ? pinkClass.join(' ') : classes.Subject} 
                            key = {index}
                            onClick = {() => props.clicked(subject)} >
                            <img src = {props.subjectImg[index]} className = {classes.img}></img>
                            <div className = {classes.SubjectName}>
                                <p className = {classes.P1}>{subject}</p>
                                <p className = {classes.P2}>2nd semester</p>
                            </div>
                            <div className = {classes.SubjectCode}>
                                <p className = {classes.P1}>Code</p>
                                <p className = {classes.P2}>23456</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className={classes.plus}><i className="fa fa-plus" area-hidden = "true"></i></div>
        </div>
    )
}


// import React, { Component } from 'react'
// import classes from './StartQuiz.module.css'

// export default class StartQuiz extends Component {

//     render() {
//         console.log('[startQuiz] render');
//         let pinkClass = [classes.Subject]
//         if(this.props.selectedSubject) {
//             pinkClass.push(classes.Pink);
//         }
//         return (
//             <div>
//                 <div className = {classes.StartQuiz}>
//                     <h1>Quizes</h1>
//                     {this.props.subjects.map((subject,index) => {
//                         return (
//                             <div 
//                                 className = {this.props.selectedSubject===subject ? pinkClass.join(' ') : classes.Subject} 
//                                 key = {index}
//                                 onClick = {() => this.props.selectSubject(subject)} >
//                                     <img src = {this.props.subjectImg[index]} className = {classes.img}></img>
//                                     <p className = {classes.P}>{subject}</p>
//                             </div>
//                         )
//                     })}
//                 </div>
//                 {this.props.selectedSubject && <button className = {classes.Button} onClick = {this.props.clicked}>Start {this.props.selectedSubject} Quiz</button>}
//             </div>
//         )
//     }
// }
