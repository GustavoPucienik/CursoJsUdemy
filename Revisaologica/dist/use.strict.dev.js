"use strict";

var y = 10;

function foo() {
  "use strict";

  var x = 20;
}

foo();
console.log(y);
/*function dobrar(n1, n1){
            "use strict" faz dar erro pq o segundo n1 tbm altera
            o valor do primeiro e da erro ja que n1 esta duplicado 
    return n1 * n1
}
console.log(dobrar(5, 5))*/

/*function Teste(){
    //"use strict"   use strict deixa o this undefined
    console.log(this)
    this.a = "a" 
}
Teste() */

var msg = "uma string";
msg.count = 0;
console.log(msg);