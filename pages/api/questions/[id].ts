import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    id?: number
    msg?: string

}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {

    const { id } = req.query

    if (id && +id) {
        res.status(200).json({
            id: +id
        })
    } else {
        res.status(404).json({
            msg: 'Question not found!'
        })
    }

}
