const quizzesDao = require("../daos/quizzes-dao")

const findAllQuizzes = () => {
    return quizzesDao.findAllQuizzes();
}
const findQuizById = (quizId) => {
    return quizzesDao.findQuizById(quizId)
}

// Placeholder for MongoDB A8
const createQuiz = () => {}
const updateQuiz = () => {}
const deleteQuiz = () => {}

module.exports = {
    findAllQuizzes,
    findQuizById,
    createQuiz,
    updateQuiz,
    deleteQuiz
}