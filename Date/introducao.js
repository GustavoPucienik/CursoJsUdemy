const data = new Date()
console.log(data)           //RETORNA DATA
console.log("getDay(): ",data.getDay())  // DIA DA SEMANA COMEÇA EM 0 NO DOMINGO
console.log("getDate(): ",data.getDate()) //DIA(COMEÇA DO 1)
console.log("getMonth(): ",data.getMonth())// MES(COMEÇA POR 0)
console.log("getTime(): ",data.getTime()) // DATA EM TIMESTAMP
console.log("getFullYear(): ",data.getFullYear())//ANO
console.log("getMilliseconds(): ",data.getMilliseconds()) //milisegundos
console.log("getHours(): ",data.getHours())    //Horario
console.log("getUTCHours(): ",data.getUTCHours()) // horario mundial

///UTC universal
///set para passar novo valor
console.log("________________________________________________________________________")  

console.log("toString(): ",data.toString())   //Transforma a data para strings
console.log("toUTCString(): ",data.toUTCString()) 
console.log("toISOString(): ",data.toISOString())// retrona uma string com o formato ISO
console.log("toDateString(): ",data.toDateString())//Transforma data em string
console.log("toLocaleString(): ", data.toLocaleString()) 
console.log("toLocaleString(ptbr,{month:'long',weekday:'long',day:'numeric'}): ", data.toLocaleString("pt-br",{month:"long",weekday:"long",day:"numeric"})) 
console.log(data.toLocaleString("pt-br", {hour12: true}))

