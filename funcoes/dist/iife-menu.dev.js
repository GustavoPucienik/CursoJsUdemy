"use strict";

//function init(){
//    let isValid = false
//    console.log("init menu", isValid)
//}
//init()
(function (win, doc) {
  "use strict";

  var isValid = false;
  win.alert("olá, mundo");
  console.log("menu", isValid);

  function init() {
    console.log("init no menu");
  }

  init();
})(window, document);