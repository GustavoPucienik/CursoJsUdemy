const alunos = [
    {
      _id: 0,
      nome: "chico melato",
      notas: {
        portugues: [10, 10, 2, 2],
        matematica: [2, 10, 2, 2],
        historia: [10, 7, 3, 5],
        ciencias: [9, 8, 5, 3],
      },
    },
    {
      _id: 1,
      nome: "talita lima",
      notas: {
        portugues: [10, 10, 4, 4],
        matematica: [7, 6, 6, 5],
        historia: [5, 8, 6, 6],
        ciencias: [7, 7, 8, 9],
      },
    },
  ];


const alunosService = new AlunosService()


// Calcula a media por materia de casa aluno e cria uma propriedade chamada media
alunos.forEach(aluno => {
    alunosService.add(new AlunoModel(aluno))
})



const alunosView = new AlunosView(document.querySelector('[data-table-alunos]'))

  const alunosController = new AlunosController(alunosService,alunosView)

/*

// percorrer cada aluno e gerar o html para incluir do tbody
function render(){
  
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
}) */