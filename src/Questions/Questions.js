import React, { useState, useEffect } from "react";
import Question from "./Question/Question";
import classes from "./Questions.module.css";

export default function Questions(props) {
  const [state, setState] = useState({
    questions: [],
    showNextButton: false,
    showSubmitButton: false,
  });

  const [showQuesNo, setShowQuesNo] = useState(0);

  useEffect(() => {
    console.log("useEffect");
    let q = props.selectedSubject;
    fetch(`http://localhost:3099/${q}`)
      .then((response) => response.json())
      .then((json) => {
        setState({ ...state, questions: json });
      });
  }, [props.selectedSubject]);

  const selectOptionHandler = (givenAns) => {
    if (!state.showNextButton) {
      console.log("selectOptionHandler");
      const quesIndex = showQuesNo;
      console.log(quesIndex);
      const question = {
        ...state.questions[quesIndex],
      };
      question.givenAns = givenAns;
      const questions = [...state.questions];
      questions[quesIndex] = question;
      setState({ ...state, questions: questions, showSubmitButton: true });
      console.log(givenAns);
    }
  };

  const submitAnsHandler = () => {
    console.log("submitAnsHandler");
    const ques = {
      ...state.questions[showQuesNo],
    };
    if (ques.givenAns === ques.correct) {
      props.rightAns();
    } else {
      props.wrongAns();
    }
    setState({ ...state, showNextButton: true, showSubmitButton: false });
  };

  const goToNextQues = () => {
    // console.log('goToNextQues');
    setShowQuesNo(showQuesNo + 1);
    if (showQuesNo + 1 === state.questions.length) {
      props.removeQues();
    } else {
      setState({ ...state, showNextButton: false });
    }
  };

  const question = {
    ...state.questions[showQuesNo],
  };
  console.log("[Questions.js] return");
  return (
    <div className={classes.Questions}>
      <div className={classes.headerDiv}>
        <div className={classes.headerDiv2}>
          <img
            className={classes.headerDivImg}
            src="https://www.byrdie.com/thmb/5LabFUFeXSjOFUzCs8KK-9otBGQ=/2341x1807/filters:no_upscale():max_bytes(150000):strip_icc()/mandy-moore-square-face-shape-56a084655f9b58eba4b13519.jpg"
          ></img>
          <p className={classes.headerDivText}>{props.selectedSubject} Quiz</p>
          <div className={classes.bars}>
            <i className="fas fa-bars"></i>
          </div>
        </div>
      </div>
      {state.questions.length > 0 && (
        <Question
          quesNo={showQuesNo + 1}
          ques={question}
          length={state.questions.length}
          selectOption={selectOptionHandler}
          givenAns={question.givenAns}
          showSubmitButton={state.showSubmitButton}
          showNextButton={state.showNextButton}
          submitAnsHandler={submitAnsHandler}
          goToNextQues={goToNextQues}
        />
      )}
    </div>
  );
}

// import React, { Component } from 'react'
// import Question from './Question/Question'
// import classes from './Questions.module.css'

// export default class Questions extends Component {
//     constructor() {
//         super()
//         this.state = {
//             questions: [],
//             showQuesNo: 0,
//             showNextButton: false,
//             showSubmitButton: false
//         }
//     }

//     componentDidMount() {
//         console.log('cdm questions.js');
//         let q = this.props.selectedSubject
//         fetch('http://localhost:3000/'+q)
//         .then(response => response.json())
//         .then((json) => {this.setState({questions:json})});
//         console.log(this.state.questions)
//     }

//     selectOptionHandler = (givenAns) => {
//         if(!this.state.showNextButton) {
//             // console.log('selectOptionHandler')
//             const quesIndex = this.state.showQuesNo
//             console.log(quesIndex);
//             const question = {
//                 ...this.state.questions[quesIndex]
//             }
//             question.givenAns = givenAns;
//             const questions = [...this.state.questions];
//             questions[quesIndex] = question;
//             this.setState({questions:questions, showSubmitButton:true});
//             console.log(givenAns);
//         }
//     }

//     submitAnsHandler = () => {
//         // console.log('submitAnsHandler');
//         const ques = {
//             ...this.state.questions[this.state.showQuesNo]
//         }
//         if(ques.givenAns === ques.correct) {
//             this.props.rightAns();
//         } else {
//             this.props.wrongAns();
//         }
//         this.setState({showNextButton:true,showSubmitButton:false})
//     }

//     goToNextQues = () => {
//         // console.log('goToNextQues');
//         this.setState({showQuesNo:this.state.showQuesNo+1});
//         if(this.state.showQuesNo+1 === this.state.questions.length) {
//             this.props.removeQues()
//         } else {
//             this.setState({showNextButton:false})
//         }
//     }

//     render() {
//         const question = {
//             ...this.state.questions[this.state.showQuesNo]
//         }
//         console.log('[Questions.js] render');
//         return (
//             <div className = {classes.Questions}>
//                 <p>{this.props.selectedSubject} Quiz</p>
//                 {this.state.questions.length>0 &&
//                 <Question
//                     quesNo = {this.state.showQuesNo+1}
//                     ques = {question}
//                     length = {this.state.questions.length}
//                     selectOption = {this.selectOptionHandler}
//                     givenAns = {question.givenAns}
//                     showNextButton = {this.state.showNextButton} />}
//                 {this.state.showSubmitButton && <button className = {classes.Button} onClick = {this.submitAnsHandler}>Submit</button>}
//                 {this.state.showNextButton && <button className = {classes.Button} onClick = {this.goToNextQues}>Next</button>}
//             </div>
//         )
//     }
// }
