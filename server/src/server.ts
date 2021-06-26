import express from 'express'
import cors from 'cors'
import path from 'path'
import routes from './routes'
import { errors } from 'celebrate'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))
app.use(errors())

/* Explicações

const users = ["Ian", "Ana", "Valdenir", "Thiago"]

// Query Param: Parâmetros que vem na própria rota geralmente opcionais (filtros/paginação)
app.get('/users', (request, response) => {
    const search = String(request.query.search)

    const filterUsers = users.filter(user => user.includes(search))

    return response.json(filterUsers)
})

// Request Param: Parâmetros que vem na própria rota geralmente opcionais que indicam um recurso
app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id)

    const user = users[id]

    return response.json(user)
})

// Request Body: Parâmetros para criação/alteração de informações
app.post('/users', (request, response) => {
    const data = request.body

    const user = {
        name: data.name,
        age: data.age,
        email: data.email
    }
    return response.json(user)
})
*/

app.listen(3333)
