import express from 'express'

const app = express()

app.get('/users', (request, response) => {

    response.json([
        "Ian",
        "Ana",
        "Valdenir",
        "Thiago"
    ])
})

app.listen(3333)