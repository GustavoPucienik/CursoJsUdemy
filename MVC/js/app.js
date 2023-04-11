alunos.forEach(aluno => {
    aluno.media = {}

    for(let materia in aluno.notas){
        aluno.media[materia] = avarege(...aluno.notas[materia])
    }
})

//inserir no thead "nome" e cada uma das materias
const htmlHeader = document.createElement("tr")
htmlHeader.innerHTML = "<td>Nome</td>"

let htmlheaderMaterias = Object.keys(alunos[0].notas).map(materia => {
    console.log(materia)
    return "<td>" + materia + "</td>"
}).join("")
console.log(htmlheaderMaterias)
htmlHeader.innerHTML += htmlheaderMaterias

document.querySelector("[data-table-alunos] thead").appendChild(htmlHeader)

// percorrer cada aluno e gerar o html para incluir do tbody
function render(){
    document.querySelector("[data-table-alunos] tbody").innerHTML = ""
    alunos.forEach( aluno => {
    const htmlBody = document.createElement("tr")
    let htmlMedias = `<td>${aluno.nome}</td>`
    Object.keys(aluno.notas).forEach( materia => {
         htmlMedias += `<td>${aluno.media[materia]}</td>`
    })
    htmlBody.innerHTML = htmlMedias
    document.querySelector("[data-table-alunos] tbody").appendChild(htmlBody)
})
}

render()


//adicionar alunos
document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault()
    const nome = document.getElementById("first_name").value
    const newAluno = {
        _id: 0,
        nome,
        notas: {
          portugues: [10, 10, 2, 2],
          matematica: [2, 10, 2, 2],
          historia: [10, 7, 3, 5],
          ciencias: [9, 8, 5, 3],
        },
      }

      newAluno.media = {}

      for(let materia in newAluno.notas){
        newAluno.media[materia] = avarege(...newAluno.notas[materia])
    }

      alunos.push(newAluno)

      render()
})