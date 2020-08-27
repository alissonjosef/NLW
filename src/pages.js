const {  subjects, weekdays, getSubject } = require('./utils/format')

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

module.exports = {
    pageLanding,
    pageStudy,
    pageGiveclasses
}