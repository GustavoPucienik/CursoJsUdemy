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

    //Contador
    //

    const txtDescricao = document.getElementById("txtDescricao")
    const contadorContainer = document.getElementById("contador")
    const resta = contadorContainer.getElementsByTagName("span")[0]
    const maxima = txtDescricao.maxLength
    resta.textContent = maxima

    // contadorContainer.removeAttribute("style")
    contadorContainer.style.display = "block"

    function checaNum(){
        let numLetrasDig = this.value.length
        let caracteresRes = parseInt(maxima) - parseInt(numLetrasDig)
        showNum(caracteresRes)

    }

    function showNum(n){
        resta.textContent = n
    }

    txtDescricao.addEventListener("input", checaNum)


    //aceitar os termos

    btn.disabled = true

    const chkAce = document.getElementById("chkAceito")
    chkAce.addEventListener("change", function(){
        btn.disabled = !this.checked
    })



})()