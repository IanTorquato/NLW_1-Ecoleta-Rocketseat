"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var path_1 = __importDefault(require("path"));
var routes_1 = __importDefault(require("./routes"));
var celebrate_1 = require("celebrate");
var app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(routes_1.default);
app.use('/uploads', express_1.default.static(path_1.default.resolve(__dirname, '..', 'uploads')));
app.use(celebrate_1.errors());
/* Explicações

const users = [
    "Ian",
    "Ana",
    "Valdenir",
    "Thiago"
]

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
app.listen(3333);
