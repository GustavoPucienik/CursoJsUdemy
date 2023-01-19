(function () {
    const dataEventDom = document.querySelector(".hero-content h1 span").innerText
    const dateEvent = getDate(dataEventDom)//variavel = função e parametro

    const today = new Date()

    let left = dateEvent.getTime() - today.getTime()

    const one_minute = 60 * 1000 
    const one_hour = 60 * one_minute//Uma hora
    const one_day = 24 * one_hour  //Um dia

    const days_left = parseInt(left / one_day)
    left = left - days_left * one_day

    const hoursLeft = parseInt(left / one_hour)
    left = left - hoursLeft * one_hour

    const minutesLeft = parseInt(left/ one_minute)
    left = left - minutesLeft * one_minute

    const secondsLeft = parseInt(left / 1000)
    
    addLeftTime(days_left, hoursLeft, minutesLeft, secondsLeft)

    function addLeftTime(d, h, m, s){
        const p = document.createElement("p")
        p.textContent = `Contagem regresiva: ${d} dias, ${h} horas, ${m} minutos, ${s} segundos `
        document.querySelector(".hero-content").appendChild(p)
    }

    function getDate(str){
        const [data, hora] = str.split(" ")
        const [day, month, year] = data.split("/")
        const [h, m] = hora.split("H")
        return new Date(year, month -1, day, h, m)
    }

})()