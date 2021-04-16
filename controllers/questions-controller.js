const questionService = require('../services/questions-service')

module.exports = (app) => {
    // path = /api/questions
    const findAllQuestions = (req, res) => {
        const questions = questionService.findAllQuestions();
        res.send(questions)
    }

    // path = /api/quizzes/:qid/questions
    const findQuestionsForQuiz = (req, res) => {
        const quizId = req.params.qid;
        const questions = questionService
            .findQuestionsForQuiz(quizId)
        res.send(questions)
    }

    app.get("/api/quizzes/:qid/questions", findQuestionsForQuiz);
    app.get("/api/questions", findAllQuestions);
}