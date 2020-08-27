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
        subject: 1 , 
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

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // Consultar os dados inseridos

    //todos os proffy

    const selectedProffys = await db.all("SELECT * FROM proffys")
    //console.log(selectedProffys)

    // consultar as classses de um determinado professor

    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)

    // o horario que a pessoa trabalha por exemplo das 8h as 18h
    //o horario time_fom 8h precisa ser menor ou igual ao horario solicitado
    //o time_to precisa ser acima
    const selectClasssSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "420"
        AND class_schedule.time_to > "520"
    `)

    //console.log(selectClasssSchedules)
})