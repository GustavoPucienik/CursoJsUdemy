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
            showErrorMessage("preencha todos os campos", function(){
            txtTitulo.focus()

            })
            e.preventDefault()
        }
    })

    const feedbackMessage = document.getElementById("feedbackMessage")
    const feedbackMessageCloseBtn = feedbackMessage.getElementsByTagName("button")[0]

    function showErrorMessage(msg, cb){
        //alert(msg)
        // feedbackMessage.setAttribute("class","show")
        feedbackMessage.classList.add("show")
        feedbackMessage.getElementsByTagName("p")[0].textContent = msg

        feedbackMessageCloseBtn.focus()

        function hideErrorMessage(){
            console.log("clicando close")
            feedbackMessage.classList.remove("show")

            feedbackMessageCloseBtn.removeEventListener("click", hideErrorMessage)
            feedbackMessageCloseBtn.removeEventListener("keyup", pressedkeyboardBtn)

            if(typeof cb === "function"){
                cb()
            }
        }

        function pressedkeyboardBtn (e){
            if(e.keyCode === 27){
                hideErrorMessage()
            }
        }


    feedbackMessageCloseBtn.addEventListener("click", hideErrorMessage)

    feedbackMessageCloseBtn.addEventListener("keyup", pressedkeyboardBtn)

    }

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