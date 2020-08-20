//Procurar o Botão
document.querySelector("#add-time")
// quado clicar no botão 
.addEventListener('click', cloneField)


// Execultar uma açao 
function cloneField() {
    console.log("Clonando campo de horario")
    // Duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    //limpar os campos
    const fields = newFieldContainer.querySelectorAll('input')

    // para cada campo, limpar
    fields.forEach(function(fields){
       fields.value = ""
    })

    // colocar na pagina
    document.querySelector('#scheldule-items').appendChild(newFieldContainer)
}
