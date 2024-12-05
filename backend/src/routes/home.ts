import { Router, Response } from 'express'

const router = Router()

/**
 * GET home page
 * @api {get} /:id Request test information
 * @apiName Example
 * @apiGroup Example
 *
 * @apiParam {Number} id test unique ID.
 *
 */
router.get('/', (_, res: Response) => {
  res.render('index', { title: "Bienvenue sur l 'API NBA Tracker" })
})

export default router
