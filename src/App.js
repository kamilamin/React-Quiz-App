import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import QuestionList from './component/quiz/QuestionList.js'
import Scorebox from './component/quiz/ScoreBox.js'
import Results from './component/quiz/Results.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          text: 'How many dots are there on a dice ?',
          choices: [
            {
              id: 'a',
              text: '33',
            },
            {
              id: 'b',
              text: '15'
            },
            {
              id: 'c',
              text: '21'
            },
            {
              id: 'd',
              text: '10'
            }
          ],
          correct: 'c'
        },
        {
          id: 2,
          text: 'Which country in the world has maximum number of the robots working?',
          choices: [
            {
              id: 'a',
              text: 'China',
            },
            {
              id: 'b',
              text: 'USA'
            },
            {
              id: 'c',
              text: 'Japan'
            },
            {
              id: 'd',
              text: 'India'
            }
          ],
          correct: 'c'
        },
        {
          id: 3,
          text: "Which SAARC Country contains eight of world's ten highest peak?",
          choices: [
            {
              id: 'a',
              text: 'India',
            },
            {
              id: 'b',
              text: 'Bhutan'
            },
            {
              id: 'c',
              text: 'Nepal'
            },
            {
              id: 'd',
              text: 'Pakistan'
            }
          ],
          correct: 'd'
        },
        {
          id: 4,
          text: 'How many light-year across is the milky way?',
          choices: [
            {
              id: 'a',
              text: '100000',
            },
            {
              id: 'b',
              text: '10000'
            },
            {
              id: 'c',
              text: '1000'
            },
            {
              id: 'd',
              text: '1000000'
            }
          ],
          correct: 'a'
        },
        {
          id: 5,
          text: 'Which blood group is called the "universal Donor"?',
          choices: [
            {
              id: 'a',
              text: 'A'
            },
            {
              id: 'b',
              text: 'O-'
            },
            {
              id: 'c',
              text: 'B'
            },
            {
              id: 'd',
              text: 'AB'
            }
          ],
          correct: 'b'
        },
        {
          id: 6,
          text: 'Gobi Desert is in ?',
          choices: [
            {
              id: 'a',
              text: 'Mongolia and China'
            },
            {
              id: 'b',
              text: 'Iran and Iraq'
            },
            {
              id: 'c',
              text: 'Saudi Arabia and Yemen'
            },
            {
              id: 'd',
              text: 'Uzbekistan and Kazakistan'
            }
          ],
          correct: 'a'
        },
        {
          id: 7,
          text: 'Which of the following is used to manage Database?',
          choices: [
            {
              id: 'a',
              text: 'Operating System'
            },
            {
              id: 'b',
              text: 'DBMS'
            },
            {
              id: 'c',
              text: 'Compilar'
            },
            {
              id: 'd',
              text: 'None of the Above'
            }
          ],
          correct: 'b'
        },
        {
          id: 8,
          text: 'Which of the following is the most powerful type computer?',
          choices: [
            {
              id: 'a',
              text: 'Super-Micro'
            },
            {
              id: 'b',
              text: 'Super Computer'
            },
            {
              id: 'c',
              text: 'Micro Computer'
            },
            {
              id: 'd',
              text: 'None of the Above'
            }
          ],
          correct: 'b'
        },
        {
          id: 9,
          text: 'Which is the second largest country in Africa?',
          choices: [
            {
              id: 'a',
              text: 'Sudan'
            },
            {
              id: 'b',
              text: 'Algeria'
            },
            {
              id: 'c',
              text: 'EGYPT'
            },
            {
              id: 'd',
              text: 'South Africa'
            }
          ],
          correct: 'b'
        },
        {
          id: 10,
          text: 'Which batsman started his international cricketing career at the age of 16?',
          choices: [
            {
              id: 'a',
              text: 'Shahid Afridi'
            },
            {
              id: 'b',
              text: 'Suresh Raina'
            },
            {
              id: 'c',
              text: 'Sachin Tendulkar'
            },
            {
              id: 'd',
              text: 'Rahul Dravid'
            }
          ],
          correct: 'c'
        }
      ],
      score: 0,
      current: 1
    }
  }
  setCurrent(current){
    this.setState({current});
  }
  setScore(score){
    this.setState({score});
  }

  render() {
    if(this.state.current > this.state.questions.length){
      var scorebox='';
      var result=<Results {...this.state}/>
    }
    else {
       scorebox = <Scorebox  {...this.state}/>
       result = '';
    }
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Quiz Application</h2>
        </div>
        {scorebox} 
        <QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)}/>
        {result}
      </div>
    );
  }
}

export default App;