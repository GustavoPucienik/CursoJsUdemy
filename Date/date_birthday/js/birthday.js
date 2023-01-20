function quantoFaltaPara(m, d) {
    const dataNow = new Date()
    dataNow.setHours(0)
    dataNow.setMinutes(0)
    dataNow.setSeconds(0)
    dataNow.setMilliseconds(0)

    let yearNow = dataNow.getFullYear()

    let dataBirthday = new Date(yearNow, m-1, d)

    const dataNowTS = +dataNow
    const dataBirthdayTS = dataBirthday

    if(dataBirthdayTS < dataNowTS){
        dataBirthday.setFullYear(++yearNow)
        dataBirthdayTS = +dataBirthday
    }

    const oneDay = 24 * 60 * 60 * 1000
    const difference = dataBirthdayTS - dataNowTS
    return parseInt(difference / oneDay)

}
