class EditAlunoView {
    constructor(){
        this.render()
    }

    render(aluno){
        const html = `
        <div class="row">
        <div class="input-field col s4">
          <input
            id="materia"
            type="text"
            class="validate"
          />
        </div>
        <div class="input-field col s2">
          <input
            id="nota_materia_1"
            type="text"
            class="validate"
          />
        </div>
        <div class="input-field col s2">
          <input
            id="nota_materia_2"
            type="text"
            class="validate"
          />
        </div>
        <div class="input-field col s2">
          <input
            id="nota_materia_3"
            type="text"
            class="validate"
          />
        </div>
        <div class="input-field col s2">
          <input
            id="nota_materia_4"
            type="text"
            class="validate"
          />
        </div>
       </div>
        `

        document.querySelector("[data-edit-notas]").innerHTML = html
    }
}