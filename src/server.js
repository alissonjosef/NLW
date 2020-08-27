const express = require('express')
const server = express()

const { pageLanding,
    pageStudy,
    pageGiveclasses,
    saveClasses
} = require('./pages')

// configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
//rescerber os dados do req.body
.use(express.urlencoded({ extended: true }))
// configurar arquiv estáticos css,imagens)
.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveclasses)
.post("/save-classes", saveClasses)
//start do servidor
.listen(5500)

