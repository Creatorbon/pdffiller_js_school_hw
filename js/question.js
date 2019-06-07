function createQuestion(name, text, options = null, correctOption = null) {
  console.log(name, text, correctOption);

  return { 
    text,
    name,
    options,
    correctOption,
   };
}