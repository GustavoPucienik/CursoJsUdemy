class AlunosService{
    constructor(){
        this.alunos = []
    }

    add(aluno){
        if(!aluno instanceof AlunoModel){
            throw TypeError("aluno deve ser uma instancia de AlunoModel")
        }
        this.alunos.push(aluno)
        this.updateLocalStorage()
    }
    edit(aluno){
        return aluno
    }

    searchById(id){
        return this.alunos.find( aluno => aluno._id === id)
    }
    updateLocalStorage(){
        const alunos = JSON.stringify(this.alunos)
        localStorage.setItem("alunos", alunos)
    }
}