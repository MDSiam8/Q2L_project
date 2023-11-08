import React, { useState } from 'react';
import AnswerBox from './AnswerBox'; // Assuming this is the correct path
import state from './state.json'; // Ensure the path is correct
import { Html } from '@react-three/drei';

const StepSevenComponent = () => {
  const [mistakes, setMistakes] = useState(state["7"].mistakes);

  // Function to handle incorrect answers
  const handleIncorrectAnswer = (userAnswer) => {
    // Assume there's only one mistake entry for step 7
    setMistakes((prevMistakes) => {
      const newMistakes = [...prevMistakes];
      newMistakes[0].count += 1;
      newMistakes[0].userAnswers.push(userAnswer);
      return newMistakes;
    });
  };

  // Function to handle the visibility of the AnswerBox
  // Assuming you want to hide the AnswerBox after a correct answer
  const handleCorrectAnswer = () => {
    // Code to hide the AnswerBox or handle the next steps
  };

  return (
    <Html scale={10}>
      <AnswerBox
        question="Enter the weight of the sample on the weighing paper (in grams):"
        correctAnswer={state["7"].mistakes[0].correctAnswer.toString()}
        onCorrectAnswer={handleCorrectAnswer}
      />
      {/* Additional UI or components */}
    </Html>
  );
};

export default StepSevenComponent;
