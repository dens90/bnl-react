/* eslint-disable react/style-prop-object */
import React, { useEffect, useState } from "react";
import "../App.css";
import imgPresentation from "../assets/presentation-image.webp";
import Answer from "./Answer";
import Questions from "../data/questions.json";
import PopUpAnswer from "./PopUpAnswer";
import Congratulation from "./Congratulation";

const Quiz = () => {
  const [questsState, setQuestsState] = useState([]);
  const [answersState, setAnswerState] = useState([]);

  
  const [successPopUp, setSuccessPopUp] = useState(false);
  const [wrongPopUp, setWrongPopUp] = useState(false);

  const [nextQuiz, setNextQuiz] = useState();

  const [index, setIndex] = useState(0);
  const [quizState, setQuizState] = useState(true);

  useEffect(() => {
    getQuestions();
    getAnswers();
  }, []);


  const getQuestions = () => {
    // eslint-disable-next-line valid-typeof
    const correctQuest = Questions.questions.map((quest) => {
      return quest.question;
    });
    setQuestsState(correctQuest);
  };
  const getAnswers = () => {
    // eslint-disable-next-line valid-typeof
    const correctAnswer = Questions.questions.map((quest) => {
      return quest.answers;
    });
    setAnswerState(correctAnswer);
  };

  const getCorrectAnswer = (e) => {
    try {
      if (e.target.innerHTML === Questions.questions[index].rightAnswer) {
        //VERIFICARE PERCHE SECONDA DOMANDA VA IN ERRORE
        
        
        setSuccessPopUp(!successPopUp);
        setTimeout(() => {
          setSuccessPopUp(!!successPopUp);
           const notView ='click-answer';
           console.log(e.target.innerHTML)
        }, 3000);
      } else {
        console.log(e.target)
        setWrongPopUp(!wrongPopUp);
        setTimeout(() => {
          setWrongPopUp(!!wrongPopUp);
        
        }, 3000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      {quizState && (
        <div className="question-div">
          <div className="question">
            <p>{questsState[index]}</p>
          </div>
          <div className="question-image">
            <img src={imgPresentation} alt="" />
          </div>
          {successPopUp && (
            <PopUpAnswer
              message={"Risposta esatta"}
              style={"success"}
              nextQuiz={() => [setIndex(() => index + 1), setNextQuiz(true)]}
            />
            //ALLA SECONDA DOMANDA RITORNA FALSE, FARE IN MODO CHE L'INDEX CONTINUI AD AUMENTARE
          )}
          {wrongPopUp && (
            <PopUpAnswer
              message={"Risposta Errata"}
              style={"wrong"}
              nextQuiz={() => [setIndex(() => index + 1), setNextQuiz(true)]}
            />
          )}
          <div className="answers">
            <div onClick={getCorrectAnswer}>
              <Answer answer={answersState?.[index]?.[0]} />
            </div>
            <div onClick={getCorrectAnswer}>
              <Answer answer={answersState?.[index]?.[1]}  />
            </div>
            <div onClick={getCorrectAnswer}>
              <Answer answer={answersState?.[index]?.[2]} />
            </div>
          </div>
          {Questions.questions[index]?.rightAnswer === undefined &&
            setQuizState(false)}
        </div>
      )}
      {!quizState && <Congratulation />}
    </div>
  );
};

export default Quiz;
