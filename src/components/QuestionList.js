import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem"

function QuestionList() {
  const [questionsArray, setQuestionsArray] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/questions")
    .then(r => r.json())
    .then(data => setQuestionsArray(data))
  }, [])
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionsArray.map((question, ix) => <QuestionItem key={ix} question={question}/>)}</ul>
    </section>
  );
}

export default QuestionList;

// prompt={question.prompt} correctIndex={question.correctIndex} id={question.id}
