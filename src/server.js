const proffys = [
    {
    name: "Alisson Silva",
    avatar: "https://avatars0.githubusercontent.com/u/46210532?s=460&u=0fcf1f629bc0e6c6a0b8e0b97b017761a134dc52&v=4",
    whatsapp: "8998744646", 
    bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões." ,
    subject: "Matematica" , 
    cost: "20", 
    weekday:[0] ,
     time_from:[720], 
     time_to:[1220] 
    },
    {
            name: "Gisele Andrade",
            avatar: "https://scontent.frec6-1.fna.fbcdn.net/v/t1.0-9/92400822_2782615745185727_3050465835828117504_n.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_eui2=AeFTvSP3CHlxpRM-59piUbjzmui97pwNu4Oa6L3unA27g_dbH6p5BuyCcKu8oD5K2Ha8cEKssJf1ik9GbYlq-oT5&_nc_ohc=Mwc4ma4Mx8wAX-djQQg&_nc_oc=AQm0KtVLPJ8gJaDjyK_0dj8gQ_zZ-IM45hSS4Wwf1fjv7S6WVKYQ-7zlIyn4aGEbsMY&_nc_ht=scontent.frec6-1.fna&oh=5d1a298bcbb6d73b3a085e457e558c3f&oe=5F6581BA",
            whatsapp: "8998744646", 
            bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões." ,
            subject: "Bilologia" , 
            cost: "40", 
            weekday:[1] ,
            time_from:[720], 
            time_to:[1220] 
    },
    {
            name: "Diego Fernandes",
            avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
            whatsapp: "8998744646", 
            bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões." ,
            subject: "Quimica" , 
            cost: "20", 
            weekday:[0] ,
             time_from:[720], 
             time_to:[1220] 
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

function getSubject(subjectNumber) {
    const arrayPosition = +subjectNumber - 1
    return subjects[arrayPosition]
}

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveclasses(req, res) {
    const data = req.query

    
    //se tiver data
    const isNotEmpty = Object.keys(data).length > 0
    if(isNotEmpty) {

        data.subject = getSubject(data.subject)

        //adicionar data ao a lista de pro
        proffys.push(data)

        return res.redirect("/study")
    }

    return res.render("give-classes.html", {subjects, weekdays})
}

const express = require('express')
const server = express()

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

