import React from 'react'
import classes from './Question.module.css'

const Question = (props) => {
    let redClass = [classes.Option]
    redClass.push(classes.Red);

    let blueClass = [classes.option]
    blueClass.push(classes.Blue);

    let greenClass = [classes.Option]
    greenClass.push(classes.Green);

    // const submit = document.getElementById('leftbtn')
    // if(props.showSubmitButton) {
    //     submit.disabled = false
    // } else {
    //     // submit.disabled = true
    // }

    // const next = document.querySelector('.rightbtn')
    // if(props.showNextButton) {
    //     next.disabled = false
    // } else {
    //     // next.disabled = true
    // }

    return (
        <div className = {classes.Question}>
            <p className = {classes.QuesNoP}>Question {props.quesNo} of {props.length}</p>
            <hr></hr>
            <p className = {classes.Ques}>{props.ques.question}</p>
            {props.ques.options.map((option,index) => {
                return (
                    <p 
                        key = {index} 
                        className = {
                            (props.showNextButton 
                            ? (
                                (option === props.ques.givenAns || option === props.ques.correct)
                                ? (option === props.ques.correct ? greenClass.join(' ') : redClass.join(' '))
                                : classes.Option
                            )
                            : (props.ques.givenAns === option ? blueClass.join(' ') : classes.option))
                        } 
                        onClick = {() => props.selectOption(option)}>
                            {option}
                    </p>
                )
            })}
            <div className = {classes.temp}></div>
            <div className = {classes.btn}>
                <button className = {classes.Button+" "+(props.showSubmitButton ? classes.leftbtn : classes.ldisabled)} onClick = {props.showSubmitButton ? props.submitAnsHandler : null}>Submit</button>
                <button className = {classes.Button+" "+(props.showNextButton ? classes.rightbtn : classes.rdisabled)} onClick = {props.showNextButton ? props.goToNextQues : null}>Next</button>
            </div>
        </div>
    )
}

export default Question


// import React, { Component } from 'react'
// import classes from './Question.module.css'

// export default class Question extends Component {
//     componentDidMount() {
//         console.log('cdm quesiton.js')
//     }
    

//     render() {
//         let redClass = [classes.Option]
//         redClass.push(classes.Red);

//         let blueClass = [classes.option]
//         blueClass.push(classes.Blue);

//         let greenClass = [classes.Option]
//         greenClass.push(classes.Green);

//         // console.log('[Question.js] render');    
//         return (
//             <div className = {classes.Question}>
//                 <p className = {classes.QuesNoP}>Question {props.quesNo} of {props.length}</p>
//                 <hr></hr>
//                 <p className = {classes.Ques}>{props.ques.question}</p>
//                 {props.ques.options.map((option,index) => {
//                     return (
//                         <p 
//                             key = {index} 
//                             className = {
//                                 (props.showNextButton 
//                                 ? (
//                                     (option === props.ques.givenAns || option === props.ques.correct)
//                                     ? (option === props.ques.correct ? greenClass.join(' ') : redClass.join(' '))
//                                     : classes.Option
//                                 )
//                                 : (props.ques.givenAns === option ? blueClass.join(' ') : classes.option))
//                             } 
//                             onClick = {() => props.selectOption(option)}>
//                                 {option}
//                         </p>
//                     )
//                 })}
//             </div>
//         )
//     }
// }
