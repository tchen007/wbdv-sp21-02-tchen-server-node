module.exports =  (app) => {
    const quizService = require('../services/quiz-service')

    const findAllQuizzes = (req, res) =>
        quizService.findAllQuizzes()
            .then(quizzes => res.json(quizzes))
    // {
    //     res.send(quizService.findAllQuizzes())
    // }

    const findQuizById = (req, res) => 
        quizService.findQuizById((req.params['quizId']))
            .then(quiz => res.json(quiz))
    // {
    //     const quizId = req.params['quizId']
    //     const quiz = quizService.findQuizById(quizId)
    //     res.send(quiz)
    // }

    app.get('/api/quizzes', findAllQuizzes)
    app.get('/api/quizzes/:quizId', findQuizById)
}