alunos.forEach(aluno => {
    aluno.media = {}

    for(let materia in aluno.notas){
        aluno.media[materia] = avarege(...aluno.notas[materia])
    }
})
console.log(alunos)