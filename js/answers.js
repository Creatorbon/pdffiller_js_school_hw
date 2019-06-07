function saveAnswer(question, answerText) {
  const { correctOption } = question;

  console.log(answerText);

  const isCorrect = correctOption === null ? null : correctOption === answerText;
  return { question, answerText, isCorrect }
}