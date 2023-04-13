class AlunoService{
    constructor(){
        this.alunos = []
    }

    add(aluno){
        if(!aluno instanceof AlunoModel){
            throw TypeError("aluno deve ser uma instancia de AlunoModel")
        }
        this.alunos.push(aluno)
    }
    edit(aluno){
        return aluno
    }
}