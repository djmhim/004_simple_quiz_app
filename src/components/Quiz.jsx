import React, { useState } from "react";
import quizData from "./qna";

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setSelectedOption("");
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < quizData.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption("");
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="container mx-auto bg-slate-800 text-white p-10 m-10 rounded">
      <h1 className="text-5xl mb-10 text-center underline font-bold">Quiz by Mukesh</h1>
      {showScore ? (
        <div className="text-center">
          <h1 className="text-2xl my-2">Quiz Completed!</h1>
          <p className="text-xl my-4">Your Score: {score} out of {quizData.length}</p>
          <button onClick={restartQuiz} className="bg-white text-black py-2 px-6 rounded my-2">
            Restart Quiz
          </button>
        </div>
      ) : (
        <form className="p-5 shadow-white shadow mb-5 rounded">
          <h1 className="text-2xl my-2">Question : {quizData[currentQuestion].question} </h1>
          <div className="flex flex-col">
            {quizData[currentQuestion].options.map((option, index) => (
              <label key={index} className="my-2">
                <input
                  type="radio"
                  name="option"
                  value={option}
                  checked={selectedOption === option}
                  onChange={() => handleOptionSelect(option)}
                />
                {option}
              </label>
            ))}
          </div>
          <button type="button" onClick={handleNextQuestion} className="bg-white text-black py-2 px-6 rounded my-2">
            Next
          </button>
        </form>
      )}
    </div>
  );
}

export default Quiz;
