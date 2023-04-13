class AlunoModel{
    constructor(aluno){
        this.nome = aluno.nome
    }
    constructor({nome, _id, notas} = {notas:{}}){
        this.nome = aluno.nome
        this._id = (_id !== undefined) ? _id : this.generateId()
        this.notas = {...notas}

        if(this._id > AlunoModel.maxId){
            AlunoModel.maxId = this._id
        }

        this.media = {}

        for(let materia in aluno.notas){
            aluno.media[materia] = avarege(...aluno.notas[materia])
        }
    }

    generateId(){
        return AlunoModel.maxId + 1
    }
}

AlunoModel.maxId = 0