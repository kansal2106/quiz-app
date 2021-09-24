import React, {useState} from 'react';
import classes from './App.module.css';
import StartQuiz from './StartQuiz/StartQuiz';
import Questions from './Questions/Questions';
import Congrats from './Congrats/Congrats';

const App = () => {
  const [state, setState] = useState({
    showStartQuiz: true,
    showQues: false,
    showCograts: false,
    rightAnswered: 0,
    wrongAnswered: 0,
    subjects: ["Maths","Physics","Chemistry","History","English"],
    subjectImg: [
      "https://s.clipartkey.com/mpngs/s/233-2339293_maths-creative.png",
      "https://blog.cambridgecoaching.com/hs-fs/hubfs/Physics%20SAT%20test.jpg?width=900&name=Physics%20SAT%20test.jpg",
      "https://www.imperial.ac.uk/ImageCropToolT4/imageTool/uploaded-images/newseventsimage_1537198485721_mainnews2012_x1.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe8lkkcg0CMlZLdmPYIKS8yu8Zs_yU-SILkg&usqp=CAU",
      "https://www.imperial.ac.uk/ImageCropToolT4/imageTool/uploaded-images/newseventsimage_1537198485721_mainnews2012_x1.jpg"
    ],
    selectedSubject: ""
  })

  const startQuizHandler = (subject) => {
    console.log(subject);
    setState({...state,selectedSubject:subject});
  }

  const startQuesHandler = (subject) => {
    console.log('startQuesHandler');
    setState({...state,selectedSubject:subject,showQues:true,showStartQuiz:false});
  }

  const rightAns = () => {
    setState({...state,rightAnswered:state.rightAnswered+1})
  }

  const wrongAns = () => {
    setState({...state,wrongAnswered:state.wrongAnswered+1})
  }

  const removeQues = () => {
    setState({...state,showQues:false,showCograts:true})
  }

  const startAgainHandler = () => {
    setState({
      ...state,
      showCograts:false, 
      showStartQuiz:true,
      rightAnswered: 0,
      wrongAnswered: 0,
      selectedSubject: ""
    })
  }
  console.log('App/js return');
  return (
    <div className={classes.App}>
      {
        state.showStartQuiz &&
        <StartQuiz
          subjects = {state.subjects}
          selectedSubject = {state.selectedSubject}
          selectSubject = {startQuizHandler}
          clicked = {startQuesHandler}
          subjectImg = {state.subjectImg} />
      }
      {
        state.showQues && 
        <Questions 
          selectedSubject = {state.selectedSubject}
          // selectOption = {selectOptionHandler}
          rightAns = {rightAns}
          wrongAns = {wrongAns}
          removeQues = {removeQues}/>
      }
      {
        state.showCograts &&
        <Congrats 
          rightAnswered = {state.rightAnswered}
          wrongAnswered = {state.wrongAnswered}
          startAgain = {startAgainHandler}  />
      }
      
    </div>
  );
}

export default App;

// import React, { Component } from 'react';
// import classes from './App.module.css';
// import StartQuiz from './StartQuiz/StartQuiz';
// import Questions from './Questions/Questions';
// import Congrats from './Congrats/Congrats';

// class App extends Component {
//   state = {
//     showStartQuiz: true,
//     showQues: false,
//     showCograts: false,
//     rightAnswered: 0,
//     wrongAnswered: 0,
//     subjects: ["Maths","Physics","Chemistry","History"],
//     subjectImg: [
//       "https://s.clipartkey.com/mpngs/s/233-2339293_maths-creative.png",
//       "https://blog.cambridgecoaching.com/hs-fs/hubfs/Physics%20SAT%20test.jpg?width=900&name=Physics%20SAT%20test.jpg",
//       "https://www.imperial.ac.uk/ImageCropToolT4/imageTool/uploaded-images/newseventsimage_1537198485721_mainnews2012_x1.jpg",
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe8lkkcg0CMlZLdmPYIKS8yu8Zs_yU-SILkg&usqp=CAU"
//     ],
//     selectedSubject: ""
//   }
//   componentDidMount() {
//     console.log('cdm app.js')
//   }
  

//   startQuizHandler = (subject) => {
//     console.log(subject);
//     this.setState({selectedSubject:subject});
//   }

//   startQuesHandler = () => {
//     console.log('startQuizHandler');
//     this.setState({showQues:true,showStartQuiz:false});
//   }

//   rightAns = () => {
//     this.setState({rightAnswered:this.state.rightAnswered+1})
//   }

//   wrongAns = () => {
//     this.setState({wrongAnswered:this.state.wrongAnswered+1})
//   }

//   removeQues = () => {
//     this.setState({showQues:false,showCograts:true})
//   }

//   startAgainHandler = () => {
//     this.setState({
//       showCograts:false, 
//       showStartQuiz:true,
//       rightAnswered: 0,
//       wrongAnswered: 0
//     })
//   }

//   render() {
    
//     return (
//       <div className={classes.App}>
//         {
//           this.state.showStartQuiz &&
//           <StartQuiz
//             subjects = {this.state.subjects}
//             selectedSubject = {this.state.selectedSubject}
//             selectSubject = {this.startQuizHandler}
//             clicked = {this.startQuesHandler}
//             subjectImg = {this.state.subjectImg} />
//         }
//         {
//           this.state.showQues && 
//           <Questions 
//             selectedSubject = {this.state.selectedSubject}
//             selectOption = {this.selectOptionHandler}
//             rightAns = {this.rightAns}
//             wrongAns = {this.wrongAns}
//             removeQues = {this.removeQues}/>
//         }
//         {
//           this.state.showCograts &&
//           <Congrats 
//             rightAnswered = {this.state.rightAnswered}
//             wrongAnswered = {this.state.wrongAnswered}
//             startAgain = {this.startAgainHandler}  />
//         }
        
//       </div>
//     );
//   }
// }

// export default App;

