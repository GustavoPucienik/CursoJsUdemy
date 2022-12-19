(function(){
    const nameUser = "Gustavo"

    if(nameUser){
        const topBarElement = document.createElement("div")
        topBarElement.className = "top-bar"
        topBarElement.innerHTML = `<p> Olá, <b>${nameUser}</b> </p>`

        //elementpai.insertBefore(novoelemento, elementoreferencia)
        const elementpai = document.querySelector(".hero")
        elementpai.insertBefore(topBarElement, elementpai.firstElementChild)
    }
   
})()