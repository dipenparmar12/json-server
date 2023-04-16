const jsonServer = require('json-server')
const server = jsonServer.create()

// const router = jsonServer.router('seeds/data.json')
const router = jsonServer.router('seeds/db.json')

const middlewares = jsonServer.defaults()
const port = process.env.PORT || 3500

console.log('Server running on PORT', port)
server.use(middlewares)
server.use(router)

server.listen(port)
