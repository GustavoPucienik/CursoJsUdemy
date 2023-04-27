function myMod1 (){
    console.log("myMod1 executado!");
    return "Valor retornado de myMod1";
}

export function myMod1_nomeada(){
    return "Função exportada nomeada";
}

export const PI = Math.PI;

export default myMod1;
