function changeName(name){
    console.log(name)
    console.log(this)
    this.name = name
    this.updatedAt = new Date()
}


const task1 = {
    nome: "task1",
    createdAt: new Date(),
    updatedAt: null,
    completed: false,
    changeName: changeName
}
const task2 = {
    nome: "task2",
    createdAt: new Date(),
    updatedAt: null,
    completed: false,
    changeName  //da pra omitir o valor
}

task1.nome += " atualizada"
task1.updatedAt = new Date()

task1.changeName("nome atualizado")

task2.changeName("Novo nome")

//console.log(task1)
console.log(task2)

const tarefa1 = new Task2()
