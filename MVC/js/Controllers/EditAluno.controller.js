class EditAlunoController{
    constructor(model, view){
        this.model = model
        this.view = view
        this.view.render(model)
    }
}