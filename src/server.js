const express = require('express')
const server = express()

const { pageLanding,
    pageStudy,
    pageGiveclasses
} = require('./pages')

// configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server

// configurar arquiv estáticos css,imagens)
.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveclasses)
.listen(5500)

