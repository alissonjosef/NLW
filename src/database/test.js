const Database = require ('./db')
const createProffy = require('./createProffy')

Database.then(async(db) => {
    // Inserri dados

    proffyValue = {
        name: "Alisson Silva",
        avatar: "https://avatars0.githubusercontent.com/u/46210532?s=460&u=0fcf1f629bc0e6c6a0b8e0b97b017761a134dc52&v=4",
        whatsapp: "8998744646", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões." ,
    }

    classValue = {
        subject: "Matematica" , 
        cost: "20", 
        // o profy id virar pelo bando de dados 
    }

    classScheduleValues = [
        // o class_id virar pelo bando de dados 
        {
            weekday:1 ,
            time_from:720, 
            time_to:1220
        },
        {
            weekday:0 ,
            time_from:520, 
            time_to:1220
        }
    ]

    await createProffy(db, {proffyValue, classValue, classScheduleValues)

    // Consultar os dados inseridos

})