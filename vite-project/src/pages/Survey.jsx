import React from 'react'
import { useParams, Link } from 'react-router-dom'

function Survey() {
  const { questionNumber } = useParams()
  const parsedNumber = parseInt(questionNumber, 10)
  const prevQuestionNumber = parsedNumber === 1 ? 1 : parsedNumber - 1
  const nextQuestionNumber = parsedNumber + 1

  return (
    <div>
      <h1>Questionnaire</h1>
      <h2>Question {questionNumber}</h2>
      <Link to={`/survey/${prevQuestionNumber}`}>Précédent</Link>
      {parsedNumber === 10 ? (
        <Link to="/results">Résultats</Link>
      ) : (
        <Link to={`/survey/${nextQuestionNumber}`}>Suivant</Link>
      )}
    </div>
  )
}

export default Survey
