/* eslint-disable import/no-anonymous-default-export */

import questions from "../questionsDB"
import shuffle from "../../../functions/shuffle"

export default (req, res) => {
    const ids = questions.map(question => question.id)
    res.status(200).json(shuffle(ids))
}