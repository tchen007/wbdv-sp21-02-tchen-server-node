module.exports =  (app) => {
    const quizService = require('../services/quiz-service')

    const findAllQuizzes = (req, res) => {
        res.send(quizService.findAllQuizzes())
    }

    const findQuizById = (req, res) => {
        const quizId = req.params['quizId']
        const quiz = quizService.findQuizById(quizId)
        res.send(quiz)
    }

    app.get('/api/quizzes', findAllQuizzes)
    app.get('/api/quizzes/:quizId', findQuizById)
}