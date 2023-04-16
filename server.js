const jsonServer = require('json-server')
const server = jsonServer.create()

// const router = jsonServer.router('src/seeds/db.json')
// const router = jsonServer.router('src/db.json')
const router = jsonServer.router(require('./src/db')())

const middlewares = jsonServer.defaults()
const port = process.env.PORT || 8000

console.log('Server running on PORT', port)
server.use(middlewares)
server.use(router)

server.listen(port)
