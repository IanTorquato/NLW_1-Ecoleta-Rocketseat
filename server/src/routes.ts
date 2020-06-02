import express, { response, json } from 'express'

import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'

const routes = express.Router()
const pointsController = new PointsController()
const itemsController = new ItemsController()

// Usando 'controllers': Listar: index. Listar 1: show. Criar: create. Atualizar: update. Remover: delete.
routes.get('/items', itemsController.index)
routes.post('/points', pointsController.create)
routes.get('/points', pointsController.index)
routes.get('/points/:id', pointsController.show)

export default routes