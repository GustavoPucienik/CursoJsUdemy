;(function(){
    let elements = [...document.querySelectorAll("[data-addClass-on-scroll]")]
    window.addEventListener("scroll", addClassScroll)

    function isElementIntoView(el){
        let rect = el.getBoundingClientRect()
        return(
            (rect.top <= 0 && rect.bottom >= 0) || (rect.top >= 0 && rect.bottom <= innerHeight)
        )
    }

    function addClassScroll(){

        if(elements.length === 0){
            window.removeEventListener("scroll", addClassScroll)
            console.log("evento removido")
        }

        elements.forEach(el => {
            if(isElementIntoView(el)){
                let delay = parseInt(el.getAttribute("data-addclass-on-scroll-delay")) || 0
                setTimeout(function(){
                    let _class = el.getAttribute("data-addclass-on-scroll")
                    el.classList.add(_class)
                    el.removeAttribute("data-addclass-on-scroll")
                    el.removeAttribute("data-addclass-on-scroll-delay")
                    elements = [...document.querySelectorAll("[data-addClass-on-scroll]")]
                }, delay)
            }
        })
    }
    addClassScroll()
})()