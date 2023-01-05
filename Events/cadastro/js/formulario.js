(function(){
    'use strict';

    const txtTitulo = document.getElementById("txtTitulo")
    const btn = document.getElementById("btn")
    const formCadastro = document.querySelector(".formCadastro")

    /* btn.addEventListener("click", function (e){
        console.log(txtTitulo.value)
        if(!txtTitulo.value){
            alert("preencha todos os campos")
            e.preventDefault()
            txtTitulo.focus()
        }
    }) */

    formCadastro.addEventListener("submit", function (e){
        console.log(txtTitulo.value)
        if(!txtTitulo.value){
            alert("preencha todos os campos")
            e.preventDefault()
            txtTitulo.focus()
        }
    })
})()