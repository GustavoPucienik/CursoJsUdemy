(function(){
    const nameUser = null
    //document.querySelector(".top-bar p").textContent = "Bem vindo " + nameUser
    const element = document.querySelector(".top-bar p")
    console.log(element.textContent)
    
    if(nameUser){
        //element.textContent = element.textContent + nameUser
        element.innerHTML += "<b>" + nameUser + "<b>"
    } else{
        //element.style.display = "none"
        //element.remove()
        const elementToRemove = element.parentElement
        elementToRemove.parentElement.removeChild(elementToRemove)
    }
})()