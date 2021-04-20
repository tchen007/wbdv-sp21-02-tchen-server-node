const questionsModel = require('../models/questions/questions-model')
const quizzesModel = require('../models/quizzes/quizzes-model')

const findAllQuestions = () => questionsModel.find()

const findQuestionById = (questionId) => questionsModel.findById(questionId)

const findQuestionsForQuiz = (quizId) => quizzesModel.findById(quizId)
    .populate('question').exec()
    .then(quiz => quiz.questions)
    .catch(console.log)

module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz }