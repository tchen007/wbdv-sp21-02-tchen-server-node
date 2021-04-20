const questionService = require('../services/questions-service')

module.exports = (app) => {
    // path = /api/questions
    const findAllQuestions = (req, res) =>
        questionService.findAllQuestions()
            .then(questions => res.json(questions))
    // {
        // const questions = questionService.findAllQuestions();
        // res.send(questions)
    // }

    // path = /api/quizzes/:qid/questions
    const findQuestionsForQuiz = (req, res) =>
        questionService.findQuestionsForQuiz(req.params['qid'])
            .then(questions => res.json(questions))
    // {
    //     const quizId = req.params.qid;
    //     const questions = questionService
    //         .findQuestionsForQuiz(quizId)
    //     res.send(questions)
    // }

    const findQuestionById = (req, res) =>
        questionService.findQuestionById(req.params['qud'])
            .then(question => res.json(question))

    app.get("/api/quizzes/:qid/questions", findQuestionsForQuiz);
    app.get("/api/questions", findAllQuestions);
    app.get("/api/questions/:qud", findQuestionById);


}