const quizzes = require('./quizzes.json')

const findAllQuizzes = () => {
    return quizzes
}
const findQuizById = (quizId) => {
    return quizzes.find((quiz) => {
        return quiz._id === quizId
    })
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