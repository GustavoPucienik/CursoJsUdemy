(function(){

    window.addEventListener("scroll", positionImage)

    const containerParalax = [...document.querySelectorAll("[data-paralax]")]

    function isGettingOut(container){
        return container.getBoundingClientRect().top <= 0
    }

    function getNewPosition(c){
        const v = parseFloat(c.getAttribute("data-p-velocity") || .5)
        return c.getBoundingClientRect().top * v * -1
    }

    function positionImage(){
        containerParalax.forEach(c => {
            let origPositionY = getComputedStyle(c).backgroundPositionY
            let origPositionX = getComputedStyle(c).backgroundPositionX

            console.log(origPositionX, origPositionY)

            if(isGettingOut(c)){
                c.style.backgroundPosition = `${origPositionX} ${getNewPosition(c)}px `
            } else {
                c.style.backgroundPosition = `${origPositionY} 0px `
            }

        })
    }

    positionImage()
    
})()