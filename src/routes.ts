import { Router } from 'express'
import AuthorController from './controllers/author-controller'

const routes = Router()

routes.post('/authors', new AuthorController().create)
routes.get('/authors', new AuthorController().list)
routes.get('/authors/:id', new AuthorController().show)

export default routes